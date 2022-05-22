import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mayusculas from '../helpers/mayusculas';
import primerasLetrasMayuscula from "../helpers/primerasLetrasMayuscula"

const PagNoticia = (props) => {
    let [noticia, setNoticia] = useState(null)
    let params = useParams()

    useEffect(() => {
        if (props.noticias) {
            encontrarNoticia()
        }
        // eslint-disable-next-line
    }, [props.noticias])

    let encontrarNoticia = () => {
        let noticiaEncontrada = props.noticias.find(noticia => noticia._id === params.id)
        setNoticia(noticiaEncontrada)
    }

    return (
        <div className='container'>
            {
                noticia ?
                    <div>
                        <h1 className='my-4'>{primerasLetrasMayuscula(noticia.titulo)}</h1>
                        <hr />
                        <h4>{mayusculas(noticia.descripcion)}</h4>
                        <img src={noticia.foto} alt={noticia.titulo}/>
                        <p>{noticia.pieDeFoto}</p>
                        <div>{noticia.cuerpo}</div>
                    </div>
                    : null
            }
        </div>
    );
};

export default PagNoticia;