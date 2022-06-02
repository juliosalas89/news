import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import parseFecha from "../helpers/parseFecha";
import mayusculas from "../helpers/mayusculas";
import primerasLetrasMayuscula from "../helpers/primerasLetrasMayuscula.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';

const ListaNoticias = (props) => {

    const eliminarNoticia = (id) => {
        const noticiaEncontrada = props.noticias.find(noticia => noticia._id === id);
        Swal.fire({
            title: `¿Seguro que quieres borrar esta noticia?`,
            text: `${parseFecha(noticiaEncontrada.fecha)}: ${mayusculas(noticiaEncontrada.titulo)}.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar noticia!'
        }).then( async (result) => {
            if (result.isConfirmed) {
                try {
                    const cabecera = {
                        method: "DELETE",
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    const respuesta = await fetch(`https://noticias-back.herokuapp.com/api/noticias/${id}`, cabecera);
                    if (respuesta.status === 200) {
                        Swal.fire(
                            'Barrada!',
                            'La noticia fué eliminada de la base de datos',
                            'success'
                        )
                        props.setConsultarBack(true);
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire(
                        'oops!',
                        'Algo salió mal.. intentalo de nuevo',
                        'error'
                    )
                }

            }
        })
    }

    return (
        <div className='my-5 container table-responsive'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Titulo</th>
                        <th>Categoria</th>
                        <th>Autor</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.noticias ? props.noticias.map(noticia => (
                            <tr key={noticia._id}>
                                <td>{parseFecha(noticia.fecha)}</td>
                                <td>{mayusculas(noticia.titulo)}</td>
                                <td>{primerasLetrasMayuscula(noticia.categoria)}</td>
                                <td>{primerasLetrasMayuscula(noticia.autor)}</td>
                                <td>
                                    <div className='d-flex justify-content-around'>
                                        <Link exact={"true"} to={`/admin/editar/${noticia._id}`}><FontAwesomeIcon icon={faPenToSquare} /></Link>
                                        <Button onClick={() => eliminarNoticia(noticia._id)} className="p-0 text-danger" variant="link"><FontAwesomeIcon icon={faTrashCan} /></Button>
                                    </div>
                                </td>
                            </tr>
                        )) : null
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ListaNoticias;