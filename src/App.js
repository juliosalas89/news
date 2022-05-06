import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/generales/Header';
import Footer from './components/generales/Footer';
import Principal from './components/inicio/Principal';

function App() {
  return (
    <div>
      <Header></Header>
      <Principal></Principal>
      <Footer></Footer>
    </div>
  );
}

export default App;
