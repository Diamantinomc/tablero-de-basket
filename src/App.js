import './App.css';
import Contador from "./components/contador";
import Boton from './components/boton';

function App() {
  return (
    <div className="App">
      <div className='principal'>
        <h1>PARTIDO FINAL</h1>
        <div className='local'>
        <h2>LOCAL</h2>
          <Contador 
              puntos = "0"
              esLocal={true}
          />

          <Boton 
            texto="+"
          />
          <Boton 
            texto="-"/>
        </div>
        <h2>VISITA</h2>
        <div className='visita'>
          <Contador 
              puntos = "0"
              esLocal={false}
          />
  
          <Boton 
            texto="+"
          />
          <Boton 
            texto="-"/>
        </div>

      </div>
    </div>
  );
}

export default App;
