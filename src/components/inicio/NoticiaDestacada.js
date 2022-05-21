import React from 'react';
import Card from 'react-bootstrap/Card'
import putin from "../../img/putin.webp";
import primerasLetrasMayuscula from '../helpers/primerasLetrasMayuscula';

const DestacadaPorCateg = (props) => {

    return (
        <Card className="bg-dark mb-3">
            <Card.Img className='imgDestacadaPorCat' src={putin} alt="Card image" />
            <Card.ImgOverlay className="shadow">
                <Card.Title>{primerasLetrasMayuscula(props.noticia.titulo)}</Card.Title>
                <Card.Text>
                    {props.noticia.descripcion}
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default DestacadaPorCateg;