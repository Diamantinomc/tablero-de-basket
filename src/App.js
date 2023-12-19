import './App.css';
import Contador from "./components/contador";
import Boton from './components/boton';
import LongTime from './components/longtime';
import ShortTime from './components/shorttime';
import { useEffect, useState } from 'react';

function App() {

  const [diff, setDiff] = useState(null);
  const [initial, setInitial] = useState(null);

  const tick = () => {
    setDiff(new Date(+new Date() - initial))
  };

  const start = () => {
    setInitial(+new Date())
  };

  useEffect(() => {
    if(initial) {
      requestAnimationFrame(tick);
    }
  }, [initial]);

  useEffect(() => {
    if(diff) {
      requestAnimationFrame(tick);
    }
  }, [diff]);

  const timeFormat = (date) => {
    if (!date) return "00:00:00";

    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();
    let cm = Math.round(date.getMilliseconds() / 10);

    mm = mm < 10  ? "0"+ mm : mm;
    ss = ss < 10  ? "0"+ ss : ss;
    cm = cm < 10  ? "0"+ cm : cm;

    return `${mm}:${ss}:${cm}`;
  }

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
            tiempoLargo = {timeFormat(diff)}
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
        <div className='botones-cronometro'>
          <Boton className='inicio'
            texto='I'
            handleClic={start}
          />
          <Boton className='pause'
            texto='P'
            handleClic={handleClic2}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
