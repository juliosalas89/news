import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import EditorTexto from './EditorTexto';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const FormNoticia = (props) => {
    const [titulo, setTitulo] = useState(""),
        [validTitulo, setValidTitulo] = useState(false),
        [descripcion, setDescripcion] = useState(""),
        [validDescripcion, setValidDescripcion] = useState(false),
        [foto, setFoto] = useState(""),
        [validFoto, setValidFoto] = useState(false),
        [pieDeFoto, setPieDeFoto] = useState(""),
        [validPieDeFoto, setValidPieDeFoto] = useState(false),
        [cuerpo, setCuerpo] = useState(''),
        [cuerpoInicial, setCuerpoInicial] = useState(null),
        [validCuerpo, setValidCuerpo] = useState(false),
        [categoria, setCategoria] = useState(''),
        [validCategoria, setValidCategoria] = useState(false),
        [autor, setAutor] = useState(''),
        [validAutor, setValidAutor] = useState(false),
        [destacada, setDestacada] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        cargarNoticia()
        //eslint-disable-next-line
    }, [])

    //la siguiente funcion pregunta si estamos por editar una noticia, si es verdadero carga los datos de la noticia a editar en los forms y carga los valores en los states correspondientes. Si es falso significa que estamos por Agregar una nueva noticia y en ese caso no hace nada, deja todo en blanco
    const cargarNoticia = () => {
        if (props.editar) {
            document.getElementById("autor").value = props.noticia.autor;
            setAutor(props.noticia.autor);
            document.getElementById("titulo").value = props.noticia.titulo;
            setTitulo(props.noticia.titulo);
            document.getElementById("descripcion").value = props.noticia.descripcion;
            setDescripcion(props.noticia.descripcion);
            document.getElementById("foto").value = props.noticia.foto;
            setFoto(props.noticia.foto);
            document.getElementById("pieDeFoto").value = props.noticia.pieDeFoto;
            setPieDeFoto(props.noticia.pieDeFoto);
            document.getElementById("categoria").value = props.noticia.categoria;
            setCategoria(props.noticia.categoria);
            document.getElementById("boton").innerText = "Guardar cambios"
            setCuerpoInicial(props.noticia.cuerpo);
            setCuerpo(props.noticia.cuerpo)
            if (props.noticia.destacada) {
                document.getElementById("checkbox-1").checked = true;
                setDestacada(true);
            }
        }
    }

    //La siguiente funcion también pregunta si se trata de una edicion o de una nueva noticia, en base a eso hace un POST o un PUT. Antes de preguntar valida todo y prepara los datos para enviarlos.
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

        //aqui pregunta si se trata de una edicion o una nueva noticia
        if (props.editar) {
            try {
                const cabecera = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(datos)
                }
                const resultado = await fetch(`https://noticias-back.herokuapp.com/api/noticias/${props.noticia._id}`, cabecera);
                console.log(resultado)
                if (resultado.status === 200) {
                    Swal.fire(
                        'noticia editada',
                        'La noticia se modificó correctamente',
                        'success'
                    )
                    props.setConsultarBack(true)
                    navigate(`/noticia/${props.noticia._id}`, { replace: true })
                } else {
                    Swal.fire(
                        'OOPS...',
                        'Ocurrió un error inesperado, intentelo nuevamente',
                        'error'
                    )
                }
            } catch(error) {
                console.log(error)
            }
        } else {
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
                    props.setConsultarBack(true)
                    //redireccionamos a la lista de productos usando la funcion "navigate" creada arriba definida con el "useNavigate"
                    navigate('/admin/listaNoticias', { replace: true }) //si ademas queremos que se elimine la ruta anteior del historial y sea reemplazada por esta pordemos escribir la línea de esta forma: navigate("/productos", {replace: true}).
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
    }

    let destacarNoticia = () => {
        const checkbox = document.getElementById("checkbox-1")
        if (checkbox.checked) {
            setDestacada(true)

        } else {
            setDestacada(false)
        }
    }

    //esta funcion valida los campos, si algo esta mal cambia el valor del state "valid" corresondiente para mostrar un alert en el input mal completado. Ademas retorna un true si estan todos los campos bien completados, o un false si falta alguno, entonces la funcion submit sabe si debe continuar con el proceso de enviar al back o abortar.
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

        if (pieDeFoto.trim() === "") {
            setValidPieDeFoto(true)
            validacion = true;
        } else {
            setValidPieDeFoto(false)
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
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control id="autor" onChange={(e) => setAutor(e.target.value)} type="text" placeholder="Introduzca el nombre del autor de la noticia." />
                    {validAutor ? (
                        <Form.Text className="text-danger">
                            Debe ingresar un autor
                        </Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Título de la noticia</Form.Label>
                    <Form.Control id="titulo" onChange={(e) => setTitulo(e.target.value)} type="text" placeholder="El formato será aplicado luego automáticamente." />
                    {validTitulo ? (
                        <Form.Text className="text-danger">
                            Debe ingresar un título
                        </Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripción breve</Form.Label>
                    <Form.Control id="descripcion" onChange={(e) => setDescripcion(e.target.value)} as="textarea" rows={3} type="text" placeholder="El formato será aplicado luego automáticamente." />
                    {validDescripcion ? (
                        <Form.Text className="text-danger">
                            Debe ingresar una descripción abreviada de la noticia - hasta 400 caracteres
                        </Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Foto</Form.Label>
                    <Form.Control id="foto" onChange={(e) => setFoto(e.target.value)} type="text" placeholder="Introduzca la URL de la foto" />
                    {validFoto ? (
                        <Form.Text className="text-danger">
                            Debe ingresar la URL de una foto
                        </Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Pie de foto</Form.Label>
                    <Form.Control id="pieDeFoto" onChange={(e) => setPieDeFoto(e.target.value)} type="text" placeholder="El formato será aplicado luego automáticamente." />
                    {validPieDeFoto ? (
                        <Form.Text className="text-danger">
                            Debe ingresar una descripcion de la foto.
                        </Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Cuerpo de la noticia</Form.Label>
                    <EditorTexto cuerpo={cuerpo} setCuerpo={setCuerpo} cuerpoInicial={cuerpoInicial}></EditorTexto>
                    {validCuerpo ? (
                        <Form.Text className="text-danger">
                            Debe ingresar el cuerpo de la noticia
                        </Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control id="categoria" onChange={(e) => setCategoria(e.target.value)} type="text" placeholder="Seleccione una categoria" />
                    {validCategoria ? (
                        <Form.Text className="text-danger">
                            Debe ingresar una categoria
                        </Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox"
                        id={'checkbox-1'}
                        label="Destacar esta noticia"
                        value="destacada"
                        onChange={destacarNoticia}
                    />
                    <Form.Text className="form-text">
                        Luego también puedes agregar o quitar de "destacadas" una noticia, desde la función de editar noticia.
                    </Form.Text>
                </Form.Group>
                <Button id="boton" type="submit">Agregar noticia</Button>
            </Form>
        </div>
    );
};

export default FormNoticia;