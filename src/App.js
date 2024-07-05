import './App.css';
import Header from './componentes/header'; //no colocar extension js
//llamo desde mi carpeta componentes
import Nav from './componentes/nav';
import Footer from './componentes/footer';

function App() {
  return (
    <div className="App">


      {/* <Header></Header> */}
      <Header /> {/* cierra asi cuando no hay nada */}
      <Nav />
      <Footer/>


    </div>
  );
}

export default App;
