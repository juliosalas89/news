import React from "react";
import Card from "react-bootstrap/Card";

const CardDivisas = (props) => {
  return (
      <Card className="ms-3 w-25 px-1">
        <Card.Body>
          <Card.Title>Cotizaciones hoy:</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          </Card.Subtitle>
          <div className="row justify-content-around">
          <Card.Text className="col-md-12 col-lg-6">
            <span className="my-0">EUR/USD</span>
            <span>{props.dolar.toFixed(2) + " $/€"}</span>
          </Card.Text>
          <Card.Text className="col-md-12 col-lg-6">
            <span className="my-0">EUR/YEN</span>
            <span>{props.yen.toFixed(2) + " ¥/€"}</span>
          </Card.Text>
          </div>
        </Card.Body>
      </Card>
  );
};

export default CardDivisas;
