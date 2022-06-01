import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/generales/Header';
import Footer from './components/generales/Footer';
import Principal from './components/inicio/Principal';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import PagCategoria from './components/pagCategoria/PagCategoria';
import PagNoticia from './components/noticias/PagNoticia';
import AgregarNoticia from './components/administrador/AgregarNoticia';
import Error404 from './components/error/Error404';
import ListaNoticias from './components/administrador/ListaNoticias';
import ListaCategorias from './components/administrador/ListaCategorias';
import EditarNoticia from './components/administrador/EditarNoticia';

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
      let consulta = await fetch("https://noticias-back.herokuapp.com/api/noticias");
      let respuesta = await consulta.json();
      setNoticias(respuesta)
      console.log(respuesta)
    } catch (error) {
      console.log(error);
    }
  }

  let consultarCategorias = async () => {
    try {
      let consulta = await fetch("https://noticias-back.herokuapp.com/api/categorias")
      let respuesta = await consulta.json();
      setCategorias(respuesta)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='altura-minima d-flex flex-column justify-content-between'>
      <div>
        {
          categorias ? <Header setCategoriaNav={setCategoriaNav} categorias={categorias}></Header> : <Error404></Error404>
        }
        <Routes>
          <Route path="/" element={
            (noticias && categorias) ? <Principal noticias={noticias} categorias={categorias}></Principal> : <Error404></Error404>
          }> </Route>
          <Route path="/categoria/:id" element={<PagCategoria categoriaNav={categoriaNav} noticias={noticias} categorias={categorias}></PagCategoria>}></Route>
          <Route path='/noticia/:id' element={<PagNoticia noticias={noticias}></PagNoticia>}></Route>
          <Route path='/admin/agregar' element={<AgregarNoticia></AgregarNoticia>}></Route>
          <Route exact path="*" element={<Navigate replace to="/" />}></Route>
          <Route path='/admin/listaNoticias' element={<ListaNoticias noticias={noticias} categorias={categorias}></ListaNoticias>}></Route>
          <Route path='/admin/listaCategorias' element={<ListaCategorias noticias={noticias} categorias={categorias}></ListaCategorias>}></Route>
          <Route path='/admin/editar/:id' element={<EditarNoticia noticias={noticias}></EditarNoticia>}></Route>
        </Routes>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
