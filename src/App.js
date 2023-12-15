import './App.css';
import Contador from "./components/contador";
import Boton from './components/boton';
import LongTime from './components/longtime';
import ShortTime from './components/shorttime';
import { useState } from 'react';

function App() {

  const [puntosLocal, setPuntosLocal] = useState(0);
  const [puntosVisita, setPuntosVisita] =useState(0);
  const [disable, setDisable] = useState(false);

  const handleClic = () => {
    setPuntosLocal(puntosLocal+1);
  };

  const handleClic2 = () => {
    setPuntosVisita(puntosVisita+1);
  };

  const bajarPuntos = () => {
    if(puntosLocal === 0){
      setDisable(disable===true);
    } else {
    setPuntosLocal(puntosLocal-1);
    }
  };

  const bajarPuntos2 = () => {
    if(puntosLocal === 0){
      setDisable(disable===true)
    }else {
    setPuntosVisita(puntosVisita-1);
  }
  };

  

  return (
    <div className="App">
      <div className='principal'>
        <h1>PARTIDO FINAL</h1>
        <div className='longTime'>
          <LongTime
            tiempoLargo = '00:00:00'
          />
        </div>
        <div className='marcadores'>
          <div className='local'>
            <h2>LOCAL</h2>
            <Contador 
              puntosLocal = {puntosLocal}
              esLocal={true}
            />

            <div className='botonesLocal'>
              <Boton className = 'localAumentar'
                texto="+"
                increase={true}
                handleClic={handleClic}
              />
              <Boton
                texto="-"
                increase={false}
                handleClic={bajarPuntos}
                />
            </div>
          </div>
          <div className='shortTime'>
            <ShortTime
              tiempoCorto= '00'
            />
          </div>
          <div className='visita'>
            <h2>VISITA</h2>
            <Contador 
                puntosVisita = {puntosVisita}
                esLocal={false}
            />
            <div className='botonesVisita'>
              <Boton
                texto="+"
                increase={true}
                handleClic={handleClic2}
              />
              <Boton 
                texto="-"
                increase={false}
                handleClic={bajarPuntos2}/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
