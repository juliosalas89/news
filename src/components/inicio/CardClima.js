import React from "react";
import Card from "react-bootstrap/Card";

const CardClima = (props) => {
  return (
      <Card className="w-25 px-1">
        <Card.Body>
          <Card.Title> Madrid - España</Card.Title>
          <img
            src={`http://openweathermap.org/img/wn/${props.clima.weather[0].icon}@2x.png`}
            alt={props.clima.weather[0].main}
          ></img>
          <Card.Text>Temperatura {props.clima.main.temp} °C</Card.Text>
        </Card.Body>
      </Card>
  );
};

export default CardClima;
