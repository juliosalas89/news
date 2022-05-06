import React from "react";
import Categoria from "./Categoria.js";

const CuerpoCategorias = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <Categoria categoria={"categoria1"}></Categoria>
      </div>
    </div>
  );
};

export default CuerpoCategorias;