import './App.css';
import Contador from "./components/contador";
import Boton from './components/boton';
import LongTime from './components/longtime';
import ShortTime from './components/shorttime';

function App() {
  return (
    <div className="App">
      <div className='principal'>
        <h1>PARTIDO FINAL</h1>
        <div className='longTime'>
          <LongTime
            tiempoLargo = '00:00:00'
          />
        </div>
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
        <div className='shorTime'>
          <ShortTime
            tiempoCorto= '00'
          />
        </div>
        <div className='visita'>
          <h2>VISITA</h2>
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
