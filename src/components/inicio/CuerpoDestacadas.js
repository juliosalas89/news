import React from 'react';
import NoticiaDestacada from './NoticiaDestacada';

const CuerpoDestacadas = (props) => {
    return (
        <div>
          <h3 className="display-3">Noticias Destacadas</h3>
          <section>
          <NoticiaDestacada className="my-2" noticias={props.noticias}></NoticiaDestacada>  
          </section>
        </div>
    );
};

export default CuerpoDestacadas;