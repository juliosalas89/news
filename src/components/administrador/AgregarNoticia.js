import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Editor from './Editor';


const AgregarNoticia = () => {
    const [titulo, setTitulo] = useState("");
    const [validTitulo, setValidTitulo] = useState(false);
    const [descripcion, setDescripcion] = useState("");
    const [validDescripcion, setValidDescripcion] = useState(false);
    const [foto, setFoto] = useState("");
    const [pieDeFoto, setPieDeFoto] = useState("");
    const [validFoto, setValidFoto] = useState("");
    const [cuerpo, setCuerpo] = useState('')
    const [validCuerpo, setValidCuerpo] = useState('')

    useEffect(() => {
        console.log(cuerpo);
    }, [cuerpo])

    const handleSubmit = (e) => {
        e.preventDefault();
        let validacion = false

        if (titulo.trim() === "") {
            setValidTitulo(true)
            validacion = true;
        } else {
            setValidTitulo(false)
        }

        if (descripcion.trim() === "") {
            setValidDescripcion(true)
            validacion = true;
        } else {
            setValidDescripcion(false)
        }

        if (foto.trim() === "") {
            setValidFoto(true)
            validacion = true;
        } else {
            setValidFoto(false)
        }

        if (cuerpo.trim() === "") {
            setValidCuerpo(true)
            validacion = true;
        } else {
            setValidCuerpo(false)
        }

        if (validacion) {
            return
        }
    }

    return (
        <div className='container'>
            <h3 className="display-3">AGREGAR NUEVA NOTICIA</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="1">
                    <Form.Label>Título de la noticia</Form.Label>
                    <Form.Control onChange={(e) => setTitulo(e.target.value)} type="text" placeholder="El formato será aplicado luego automáticamente." />
                    {validTitulo ? (
                        <Form.Text className="text-danger">
                            Debe ingresar un título
                        </Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="2">
                    <Form.Label>Descripción breve</Form.Label>
                    <Form.Control onChange={(e) => setDescripcion(e.target.value)} as="textarea" rows={3} type="text" placeholder="El formato será aplicado luego automáticamente." />
                    {validDescripcion ? (
                        <Form.Text className="text-danger">
                            Debe ingresar una descripción abreviada de la noticia - hasta 400 caracteres
                        </Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="3">
                    <Form.Label>Foto</Form.Label>
                    <Form.Control onChange={(e) => setFoto(e.target.value)} type="text" placeholder="Introduzca la URL de la foto" />
                    {validFoto ? (
                        <Form.Text className="text-danger">
                            Debe ingresar la URL de una foto
                        </Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="4">
                    <Form.Label>Pie de foto</Form.Label>
                    <Form.Control onChange={(e) => setPieDeFoto(e.target.value)} type="text" placeholder="El formato será aplicado luego automáticamente." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Cuerpo de la noticia</Form.Label>
                    <Editor cuerpo={cuerpo} setCuerpo={setCuerpo}></Editor>
                    {validCuerpo ? (
                        <Form.Text className="text-danger">
                            Debe ingresar el cuerpo de la noticia
                        </Form.Text>
                    ) : null}
                </Form.Group>
                <Button type="submit">Agregar noticia</Button>
            </Form>
        </div>
    );
};

export default AgregarNoticia;