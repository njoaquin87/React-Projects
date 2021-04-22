import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MiComponente from './components/MiComponente';

function HolaMundo(nombre,edad){
  return  (<div>
    <h2>Hola, soy {nombre}</h2>
    <h3>Tengo {edad} años</h3>
  </div>);
}
function App() {
  var nombre = "Nilton J.";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Bienvenido al curso de Nilton Joaquin
          4545
        </p>
        {HolaMundo(nombre,33)}
        <section className="componentes">
        <MiComponente />
        <MiComponente />
        <MiComponente />
      </section>
      </header>
    
      
      
    </div>
  );
}

export default App;
