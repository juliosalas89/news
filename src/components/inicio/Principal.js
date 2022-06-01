import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardClima from "./CardClima";
import CardDivisas from "./CardDivisas";
import CuerpoCategorias from "./CuerpoCategorias";
import CuerpoDestacadas from "./CuerpoDestacadas";

const Principal = (props) => {
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
        <section className="p-2 my-3 border">
          <div>
          <Link className="btn btn-outline-primary" exact={"true"} to={"/admin/agregar"}>Publicar nueva noticia</Link>
          <Link className="btn btn-outline-primary" exact={"true"} to={"/admin/listaNoticias"}>Ver todas las noticias</Link>
          <Link className="btn btn-outline-primary" exact={"true"} to={"/admin/listaCategorias"}>Ver todas las categorias</Link>
          </div>
          <div>
          <Form.Text>Sólo los administradores pueden ver este menú</Form.Text>
          </div>
        </section>
        <section className="my-3 d-flex">
          <div className="bg-lineas-diagonales w-50 text-center"><h5 className="my-3">Aquí va una add</h5></div>
          {clima ? <CardClima clima={clima}></CardClima> : null}
          {(dolar && yen) ? <CardDivisas dolar={dolar} yen={yen}></CardDivisas> : null}
        </section>
        <section className="row">
          <div className="col-sm-12 col-md-9">
            <CuerpoDestacadas noticias={props.noticias}></CuerpoDestacadas>
          </div>
          <div className="bg-lineas-diagonales text-center col-sm-12 col-md-3"><h5 className="my-3 sticky-top">Aquí va una add</h5></div>
        </section>
        <section>
          <CuerpoCategorias noticias={props.noticias} categorias={props.categorias}></CuerpoCategorias>
        </section>
      </div>
    </article>
  );
};

export default Principal;
