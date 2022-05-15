import React from "react";
import Categoria from "./Categoria.js";

const CuerpoCategorias = (props) => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <Categoria noticias={props.noticias}></Categoria>
      </div>
    </div>
  );
};

export default CuerpoCategorias;