import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/generales/Header';
import Footer from './components/generales/Footer';
import Principal from './components/inicio/Principal';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import PagCategoria from './components/pagCategoria/PagCategoria';

function App() {
  let [categoriaNav, setCategoriaNav] = useState(null)
  let [noticias, setNoticias] = useState(null);
  let [categorias, setCategorias] = useState(null);

  useEffect(() => {
    consultarNoticias();
    consultarCategorias();
  }, [])

  let consultarNoticias = async () => {
    try {
      let consulta = await fetch("http://localhost:4000/api/noticias");
      let respuesta = await consulta.json();
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
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {
        categorias ? <Header setCategoriaNav={setCategoriaNav} categorias={categorias}></Header> : null
      }
      <Routes>
        <Route path="/" element={
          (noticias && categorias) ? <Principal noticias={noticias} categorias={categorias}></Principal> : null
        }> </Route>
        <Route path="/categoria/:id" element={<PagCategoria categoriaNav={categoriaNav} noticias={noticias} categorias={categorias}></PagCategoria>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
