import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalCategoria from './ModalCategoria';
import mayusculas from '../helpers/mayusculas';
import Swal from 'sweetalert2';

const ListaCategorias = (props) => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [categoriaEditar, setCategoriaEditar] = useState();
    const [editar, setEditar] = useState(false);

    const editarCategoria = (id)=> {
        const categoriaEncontrada = props.categorias.find(categoria => categoria._id === id);
        setCategoriaEditar(categoriaEncontrada);
        setEditar(true);
        abrirModal();
    }

    const eliminarCategoria = async (id) => {
        const categoriaEncontrada = props.categorias.find(categoria => categoria._id === id);
            Swal.fire({
                title: `¿Seguro que quieres eliminar esta categoria?`,
                text: `${mayusculas(categoriaEncontrada.nombre)}: ${categoriaEncontrada.descripcion}.`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, borrar categoría!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const header = {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                        const respuesta = await fetch(`https://noticias-back.herokuapp.com/api/categorias/${id}`, header)
                        if (respuesta.status === 200) {
                            Swal.fire(
                                'Barrada!',
                                'La categoría fué eliminada de la base de datos',
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

    const abrirModal = () => setMostrarModal(true);

    return (
        <div className="container">
            <Button onClick={() => abrirModal()}>Agregar una categoria</Button>
            <ModalCategoria categoriaEditar={categoriaEditar} editar={editar} setEditar={setEditar} setConsultarBack={props.setConsultarBack} mostrarModal={mostrarModal} setMostrarModal={setMostrarModal}></ModalCategoria>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.categorias ? props.categorias.map(categoria => (
                            <tr key={categoria._id}>
                                <td>{mayusculas(categoria.nombre)}</td>
                                <td>{categoria.descripcion}</td>
                                <td>
                                    <div className='d-flex justify-content-around'>
                                        <Button onClick={() => editarCategoria(categoria._id)} className="p-0 text-primary" variant="link"><FontAwesomeIcon icon={faPenToSquare} /></Button>
                                        {/* <Link exact={"true"} to={`/admin/editar/${categoria._id}`}><FontAwesomeIcon icon={faPenToSquare} /></Link> */}
                                        <Button onClick={() => eliminarCategoria(categoria._id)} className="p-0 text-danger" variant="link"><FontAwesomeIcon icon={faTrashCan} /></Button>
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

export default ListaCategorias;