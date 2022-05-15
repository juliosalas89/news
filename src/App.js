import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/generales/Header';
import Footer from './components/generales/Footer';
import Principal from './components/inicio/Principal';
import { useEffect, useState } from 'react';

function App() {
  let [noticias, setNoticias] = useState([])

  useEffect(() => {
    consultarBack();
  }, [])

  let consultarBack = async () => {
    try {
      let consulta = await fetch("http://localhost:4000/api/noticias");
      let respuesta = await consulta.json();
      console.log("Desde consultarBack-APP.js: " + respuesta)
      setNoticias(respuesta)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={
          noticias ? <Principal noticias={noticias}></Principal> : null
        }> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
