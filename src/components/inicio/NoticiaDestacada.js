import Card from "react-bootstrap/Card";
import putin from "../../img/putin.webp";

const NoticiaDestacada = (props) => {
  
  return (
    <div>
      <Card className="my-3">
        <Card.Img variant="top" src={putin}/>
        <Card.Body>
          <Card.Title> {props.noticia.titulo} </Card.Title>
          <Card.Text> {props.noticia.descripcion}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoticiaDestacada;
