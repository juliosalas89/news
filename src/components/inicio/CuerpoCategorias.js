import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Categoria from "./Categoria.js";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const CuerpoCategorias = (props) => {
  let [categoriasDestacadas, setCategoriasDestacadas] = useState([]);

  useEffect(() => {
    identificarCategoriasDestacadas();
    // eslint-disable-next-line
  }, [props.categorias])

  let identificarCategoriasDestacadas = () => {
    let filtro = props.categorias.filter(categoria => categoria.destacada === true);
    setCategoriasDestacadas(filtro);
  }

  return (
    <div className="my-5 container">
      <h3 className="display-3">CATEGORIAS</h3>
      <hr />
      <Container>
        <Row>
          {
            (categoriasDestacadas ? categoriasDestacadas.map((categoria) => (
              <Col className="mt-3" md={12} lg={6} key={categoria._id}>
                <Categoria noticias={props.noticias} categoria={categoria}></Categoria>
              </Col>
            )) : null)
          }
        </Row>
      </Container>
    </div>
  );
};

export default CuerpoCategorias;