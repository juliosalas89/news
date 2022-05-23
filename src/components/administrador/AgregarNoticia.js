import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Editor from './Editor';


const AgregarNoticia = () => {
    
    const [content, setContent] = useState('')

    useEffect(()=> {
        console.log(content);
    },[content])

    return (
        <div className='container'>
            <h3 className="display-3">AGREGAR NUEVA NOTICIA</h3>
            <Form>
                <Form.Group className="mb-3" controlId="1">
                    <Form.Label>Título de la noticia</Form.Label>
                    <Form.Control type="text" placeholder="El formato será aplicado luego automáticamente." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="2">
                    <Form.Label>Descripción breve</Form.Label>
                    <Form.Control type="text" placeholder="El formato será aplicado luego automáticamente." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="3">
                    <Form.Label>Foto</Form.Label>
                    <Form.Control type="text" placeholder="Introduzca la URL de la foto" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="4">
                    <Form.Label>Pie de foto</Form.Label>
                    <Form.Control type="text" placeholder="El formato será aplicado luego automáticamente." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Cuerpo de la noticia</Form.Label>
                    <Editor content={content} setContent={setContent}></Editor>
                </Form.Group>
            </Form>
        </div>
    );
};

export default AgregarNoticia;