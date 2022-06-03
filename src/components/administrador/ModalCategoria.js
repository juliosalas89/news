import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

const ModalCategoria = (props) => {
    const [nombre, setNombre] = useState("");
    const [validNombre, setValidNombre] = useState(false);
    const [destacada, setDestacada] = useState(false);
    const [descripcion, setDescripcion] = useState("");
    const [validDescripcion, setValidDescripcion] = useState(false);
    const [errorBD, setErrorBD] = useState(false);

    useEffect(()=> {
        setValidNombre(false);
        setValidDescripcion(false);
        setDescripcion("");
        setNombre("");
        setErrorBD(false);
        setDestacada(false);
        if(props.mostrarModal === false) {
            props.setEditar(false)
        }
        //eslint-disable-next-line
    }, [props.mostrarModal])

    const cerrarModal = () => props.setMostrarModal(false);

    const destacarCategoria = ()=> {
        if (document.getElementById('checkbox').checked) {
            setDestacada(true);
        } else {
            setDestacada(false);
        }
    }

    const agregarCategoria = async ()=> {
        if(validarFormulario()) {
            return
        }
        const datos = {
            nombre,
            descripcion,
            destacada
        }
        try {
            const header = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            }
            const respuesta = await fetch("https://noticias-back.herokuapp.com/api/categorias", header);
            console.log(respuesta)
            if(respuesta.status === 201) {
                props.setMostrarModal(false);
                props.setConsultarBack(true);
                Swal.fire(
                    'Categoria creada!',
                    'La nueva categoría se guardo correctamente',
                    'success'
                )
            } else {
                setErrorBD(true);
            }
        } catch(error) { 
            console.log(error);
        }
    }

    const validarFormulario = ()=> {
        let validacion = false;
        if(nombre.trim() === "" ) {
            setValidNombre(true);
            validacion = true;
        } else {
            setValidNombre(false);
        }
        if(descripcion.trim() === "" ) {
            setValidDescripcion(true);
            validacion = true;
        } else {
            setValidDescripcion(false);
        }
        return validacion;
    }

    return (
        <Modal show={props.mostrarModal} onHide={cerrarModal} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Nueva Ctaegoria</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre de la categoria</Form.Label>
                        <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} placeholder="Enter email" />
                        { validNombre ?
                            <Form.Text className="text-danger">
                                Debe introducir un nombre
                            </Form.Text> : null
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" as="textarea" onChange={(e) => setDescripcion(e.target.value)} placeholder="Escriba aquí una descripción del contenido que abarca esta categoría" />
                        { validDescripcion ?
                            <Form.Text className="text-danger">
                                Debe introducir un nombre
                            </Form.Text> : null
                        }
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check id='checkbox' onChange={()=> destacarCategoria()} type="checkbox" label="Categoria destacada." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            {   errorBD ?
                <Form.Text className='ms-3 text-danger fs-5'>Algo salio mal... Intentalo nuevamente</Form.Text> 
                : null}
            <Modal.Footer>
                <Button variant="secondary" onClick={() => cerrarModal()}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={() => agregarCategoria()}>
                    Guardar Categoria
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalCategoria;