import React from "react";
import Card from "react-bootstrap/Card";
import putin from "../../img/putin.webp";

const NoticiaDestacada = () => {
  return (
      <Card className="my-3">
        <Card.Img variant="top" src={putin}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            b   ulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
  );
};

export default NoticiaDestacada;
