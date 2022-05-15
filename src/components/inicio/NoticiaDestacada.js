import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import putin from "../../img/putin.webp";

const NoticiaDestacada = (props) => {
  let [noticiasDestacadas, setNoticiasDestacadas] = useState([]);

  useEffect(() => {
    let filtro = props.noticias.filter((noticia) => { return noticia.destacada === true });
    setNoticiasDestacadas(filtro);
  }, [props.noticias]);

  return (
    <div>
      {
        noticiasDestacadas.map((noticia) => (
          <Card key={noticia._id} className="my-3">
            <Card.Img variant="top" src={putin} />
            <Card.Body>
              <Card.Title> {noticia.titulo} </Card.Title>
              <Card.Text> {noticia.descripcion}
              </Card.Text>
            </Card.Body>
          </Card>)
        )
      }
    </div>
  );
};

export default NoticiaDestacada;
