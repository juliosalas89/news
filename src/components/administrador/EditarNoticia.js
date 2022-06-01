import React, { useEffect, useState } from 'react';
import FormNoticia from './FormNoticia';
import { useParams } from 'react-router-dom';

const EditarNoticia = (props) => {
    const [noticia, setNoticia] = useState(null);
    const [editar, setEditar] = useState(false)
    const params = useParams();

    useEffect(() => {
        encontrarNoticia()
        // eslint-disable-next-line
    }, [props.noticias])

    const encontrarNoticia = () => {
        const noticiaEncontrada = props.noticias.find(noticia => noticia._id === params.id)
        setNoticia(noticiaEncontrada)
        setEditar(true)
    }

    return (
        <div className="container">
            <h3 className="mt-4 display-3">EDITAR NOTICIA</h3>
            {noticia ? <FormNoticia setConsultarBack={props.setConsultarBack} noticia={noticia} editar={editar}></FormNoticia> : null}
        </div>
    );
};

export default EditarNoticia;