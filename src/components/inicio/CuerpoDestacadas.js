import React from 'react';
import NoticiaDestacada from './NoticiaDestacada';
import { useEffect, useState } from "react";

const CuerpoDestacadas = (props) => {
  let [noticiasDestacadas, setNoticiasDestacadas] = useState([]);

  useEffect(() => {
    let filtro = props.noticias.filter((noticia) => { return noticia.destacada === true });
    setNoticiasDestacadas(filtro);
  }, [props.noticias]);

  return (
    <div>
      {
        noticiasDestacadas ? <h3 className="display-3">DESTACADAS</h3> : null
      }
      <hr />
      <section>
        {noticiasDestacadas ?
          noticiasDestacadas.map((noticia) => (<NoticiaDestacada key={noticia._id} className="my-2" noticia={noticia}></NoticiaDestacada>)) : null
        }
      </section>
    </div>
  );
};

export default CuerpoDestacadas;