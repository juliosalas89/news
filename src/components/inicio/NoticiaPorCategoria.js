import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const NoticiaPorCategoria = (props) => {
    return (
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.noticia.titulo}</Card.Title>
                    <Card.Text>
                        {props.noticia.descripcion}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    );
};

export default NoticiaPorCategoria;