import React from 'react';
import FormNoticia from "./FormNoticia";

const AgregarNoticia = (props) => {
    return (
        <div className="container">
            <h3 className="mt-4 display-3">AGREGAR NUEVA NOTICIA</h3>
            <FormNoticia setConsultarBack={props.setConsultarBack}></FormNoticia>
        </div>
    );
};

export default AgregarNoticia;