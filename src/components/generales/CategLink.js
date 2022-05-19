import React from 'react';
import { NavLink } from "react-router-dom";

const CategLink = (props) => {
    let prepararTitulo = (nombre) => {
        return nombre.charAt(0).toUpperCase() + nombre.slice(1);
    }

    let clickHandler = ()=> {
        props.setCategoriaNav(props.categoria)
    }

    return (
        <NavLink
            exact={"true"}
            to={`/categoria/${props.categoria._id}`}
            className={props.clase}
            onClick={clickHandler}>
            {prepararTitulo(props.categoria.nombre)}
        </NavLink>
    );
};

export default CategLink;