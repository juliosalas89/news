import React, { useEffect, useState } from "react";
import CardClima from "./CardClima";
import CardDivisas from "./CardDivisas";
import CuerpoCategorias from "./CuerpoCategorias";
import CuerpoDestacadas from "./CuerpoDestacadas";

const Principal = () => {
  let [dolar, setDolar] = useState(0);
  let [yen, setYen] = useState(0);
  let [clima, setClima] = useState();

  useEffect(() => {
    consultarMoneda();
    consultarClima();
  }, []);

  let consultarClima = async () => {
    try {
      const apiKey = "ce9bfe58db920905fe3b670a0bf759e2";
      let climaAPI = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=madrid,ES&appid=${apiKey}&units=metric`
      );
      let respuesta = await climaAPI.json();
      setClima(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  let consultarMoneda = async () => {
    try {
      let divisas = await fetch(
        "http://api.exchangeratesapi.io/v1/latest?access_key=3991cef90bdd597777ff88f6e874ee0e"
      );
      let respuesta = await divisas.json();
      setDolar(respuesta.rates.USD);
      setYen(respuesta.rates.JPY);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article>
      <div className="container">
        <section className="my-3 d-flex">
          <div className="w-50 text-center">Aqui va la ADD</div>
          {clima ? <CardClima clima={clima}></CardClima> : null}
          <CardDivisas dolar={dolar} yen={yen}></CardDivisas>
        </section>
        <section className="row">
          <div className="col-sm-12 col-md-8">
            <CuerpoDestacadas></CuerpoDestacadas>
          </div>
          <div className="col-sm-12 col-md-4">Aqui va una add</div>
        </section>
        <section>
          <CuerpoCategorias></CuerpoCategorias>
        </section>
      </div>
    </article>
  );
};

export default Principal;
