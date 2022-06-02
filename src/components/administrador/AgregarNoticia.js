import React from 'react';
import FormNoticia from "./FormNoticia";
import { useState } from 'react';

const AgregarNoticia = (props) => {
    // eslint-disable-next-line
    const [editar, setEditar] = useState(false)

    return (
        <div className="container">
            <h3 className="mt-4 display-3">AGREGAR NUEVA NOTICIA</h3>
            <FormNoticia setConsultarBack={props.setConsultarBack} editar={editar}></FormNoticia>
        </div>
    );
};

export default AgregarNoticia;