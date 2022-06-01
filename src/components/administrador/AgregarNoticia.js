import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Editor from './Editor';
import Swal from 'sweetalert2'


const AgregarNoticia = () => {
    const [titulo, setTitulo] = useState("");
    const [validTitulo, setValidTitulo] = useState(false);
    const [descripcion, setDescripcion] = useState("");
    const [validDescripcion, setValidDescripcion] = useState(false);
    const [foto, setFoto] = useState("");
    const [validFoto, setValidFoto] = useState(false);
    const [pieDeFoto, setPieDeFoto] = useState("");
    const [cuerpo, setCuerpo] = useState('');
    const [validCuerpo, setValidCuerpo] = useState(false)
    const [categoria, setCategoria] = useState('');
    const [validCategoria, setValidCategoria] = useState(false);
    const [autor, setAutor] = useState('');
    const [validAutor, setValidAutor] = useState(false);
    const [destacada, setDestacada] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        validarCampos();
        if (validarCampos()) {
            return
        }

        const datos = {
            titulo,
            descripcion,
            foto,
            pieDeFoto,
            cuerpo,
            categoria,
            autor,
            fecha: Date(),
            destacada
        }

        try {
            const cabecera = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datos)
            }
            const resultado = await fetch("https://noticias-back.herokuapp.com/api/noticias", cabecera);
            console.log(resultado)
            if (resultado.status === 201) {
                Swal.fire(
                    'noticia agregada',
                    'La noticia se creó correctamente',
                    'success'
                )
                //redireccionamos a la lista de productos usando la funcion "navigate" creada arriba definida con el "useNavigate"
                //navigate("/productos") //si ademas queremos que se elimine la ruta anteior del historial y sea reemplazada por esta pordemos escribir la línea de esta forma: navigate("/productos", {replace: true}).
                //Otra cosa que se puede hacer con el navigate es moverme hacia adelante o hacia atrás con el nvigate introduciendo numeros positivos (si quiero navegar hacia adelante) o negativos (si quiero navegar hacia atras), de esta forma por ejemplo vuelve atras: navigate(-1) 
            } else {
                Swal.fire(
                    'OOPS...',
                    'Ocurrió un error inesperado, intentelo nuevamente',
                    'error'
                )
            }
        } catch (error) {
            console.log(error);
        }

    }

    let destacarNoticia = ()=> {
        const checkbox = document.getElementById("checkbox-1")
        if (checkbox.checked) {
            setDestacada(true)
            
        } else {
            setDestacada(false)
        }
    }

    const validarCampos = () => {
        let validacion = false;
        if (autor.trim() === "") {
            setValidAutor(true)
            validacion = true;
        } else {
            setValidAutor(false)
        }

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

        if (categoria.trim() === "") {
            setValidCategoria(true)
            validacion = true;
        } else {
            setValidCategoria(false)
        }
        return validacion;
    }

    return (
        <div className='container'>
            <h3 className="mt-4 display-3">AGREGAR NUEVA NOTICIA</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="1">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control onChange={(e) => setAutor(e.target.value)} type="text" placeholder="Introduzca el nombre del autor de la noticia." />
                    {validAutor ? (
                        <Form.Text className="text-danger">
                            Debe ingresar un autor
                        </Form.Text>
                    ) : null}
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="1">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control onChange={(e) => setCategoria(e.target.value)} type="text" placeholder="Seleccione una categoria" />
                    {validCategoria ? (
                        <Form.Text className="text-danger">
                            Debe ingresar una categoria
                        </Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        id={`checkbox-1`} 
                        label="Destacar esta noticia" 
                        value="destacada"
                        onChange={destacarNoticia}
                        />
                        <Form.Text className="form-text">
                            Luego también puedes destacar o retirar de destacadas una noticia, desde la administración de noticias.
                        </Form.Text>
                </Form.Group>
                <Button type="submit">Agregar noticia</Button>
            </Form>
        </div>
    );
};

export default AgregarNoticia;