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

    useEffect(() => {
        if (noticia) {
            escribirCuerpo()
        }
        // eslint-disable-next-line
    }, [noticia])

    let encontrarNoticia = () => {
        let noticiaEncontrada = props.noticias.find(noticia => noticia._id === params.id)
        setNoticia(noticiaEncontrada)
    }
    const escribirCuerpo = ()=> {
        document.getElementById("cuerpo").innerHTML = noticia.cuerpo;
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
                        <div id="cuerpo"></div>
                    </div>
                    : null
            }
        </div>
    );
};

export default PagNoticia;