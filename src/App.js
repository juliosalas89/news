import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/generales/Header';
import Footer from './components/generales/Footer';
import Principal from './components/inicio/Principal';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"

function App() {
  let [noticias, setNoticias] = useState([]);
  let [categorias, setCategorias] = useState([]);

  useEffect(() => {
    consultarNoticias();
    consultarCategorias();
  }, [])

  let consultarNoticias = async () => {
    try {
      let consulta = await fetch("http://localhost:4000/api/noticias");
      let respuesta = await consulta.json();
      console.log("Desde consultarNoticias-APP.js: " + respuesta)
      setNoticias(respuesta)
    } catch (error) {
      console.log(error);
    }
  }

  let consultarCategorias = async () => {
    try {
      let consulta = await fetch("http://localhost:4000/api/categorias")
      let respuesta = await consulta.json();
      setCategorias(respuesta)
      console.log("Desde consultarCategorias-APP.js: " + respuesta)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={
          (noticias && categorias) ? <Principal noticias={noticias} categorias={categorias}></Principal> : null
        }> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
