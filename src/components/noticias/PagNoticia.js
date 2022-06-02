import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import mayusculas from '../helpers/mayusculas';
import primerasLetrasMayuscula from "../helpers/primerasLetrasMayuscula";
import parseFecha from '../helpers/parseFecha';
import Button from 'react-bootstrap/Button';

const PagNoticia = (props) => {
    const [noticia, setNoticia] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (props.noticias) {
            encontrarNoticia();
        }
        // eslint-disable-next-line
    }, [props.noticias])

    useEffect(() => {
        if (noticia) {
            escribirCuerpo();
        }
        // eslint-disable-next-line
    }, [noticia])

    let encontrarNoticia = () => {
        let noticiaEncontrada = props.noticias.find(noticia => noticia._id === params.id);
        setNoticia(noticiaEncontrada);
    }
    const escribirCuerpo = () => {
        document.getElementById("cuerpo").innerHTML = noticia.cuerpo;
    }

    const eliminarNoticia = async (id) => {
        await Swal.fire({
            title: `¿Seguro que quieres borrar esta noticia?`,
            text: `${parseFecha(noticia.fecha)}: ${mayusculas(noticia.titulo)}.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar noticia!'
        }).then(async (result) => {
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
                        navigate(-1)
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
        <div className='container'>
            {
                noticia ?
                    <section>
                        <Link className='btn btn-outline-primary' to={`admin/editar/${noticia._id}`} >Editar esta noticia</Link>
                        <Button variant='outline-danger' onClick={() => eliminarNoticia(noticia._id)} >Eliminar esta noticia</Button>
                        <div>
                            <h1 className='my-4'>{primerasLetrasMayuscula(noticia.titulo)}</h1>
                            <hr />
                            <h4>{mayusculas(noticia.descripcion)}</h4>
                            <img src={noticia.foto} alt={noticia.titulo} />
                            <p>{noticia.pieDeFoto}</p>
                            <div id="cuerpo"></div>
                        </div>
                    </section>
                    : null
            }
        </div>
    );
};

export default PagNoticia;