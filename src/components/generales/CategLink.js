import React from 'react';
import { NavLink } from "react-router-dom";

const CategLink = (props) => {
    let prepararTitulo = (nombre) => {
        return nombre.charAt(0).toUpperCase() + nombre.slice(1);
    }

    return (
        <NavLink
            exact={"true"}
            to={`/categoria/${props.categoria._id}`}
            className={props.clase}>
            {prepararTitulo(props.categoria.nombre)}
        </NavLink>
    );
};

export default CategLink;