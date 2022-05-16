import { useEffect, useState } from "react";
import Categoria from "./Categoria.js";

const CuerpoCategorias = (props) => {
  let [categoriasDestacadas, setCategoriasDestacadas] = useState([]);
  
  useEffect(()=>{
    identificarCategoriasDestacadas();
    // eslint-disable-next-line
  },[props.categorias])

  let identificarCategoriasDestacadas = () => {
    let filtro = props.categorias.filter(categoria => categoria.destacada === true);
    setCategoriasDestacadas(filtro);
  }

  return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        {
          (categoriasDestacadas ? categoriasDestacadas.map((categoria) => (<Categoria key={categoria._id} noticias={props.noticias} categoria={categoria}></Categoria>)) : null)
        }
      </div>
    </div>
  );
};

export default CuerpoCategorias;