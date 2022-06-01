import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import parseFecha from "../helpers/parseFecha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ListaNoticias = (props) => {
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
                                <td>{noticia.titulo}</td>
                                <td>{noticia.categoria}</td>
                                <td>{noticia.autor}</td>
                                <td>
                                    <div className='d-flex justify-content-around'>
                                        <Link exact={"true"} to={`/admin/editar/${noticia._id}`}><FontAwesomeIcon icon={faPenToSquare} /></Link>
                                        <Button className="p-0 text-danger" variant="link"><FontAwesomeIcon icon={faTrashCan}/></Button>
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