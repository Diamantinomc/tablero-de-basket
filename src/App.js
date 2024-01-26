import './App.css';
import Cronometro from './components/Cronometro';
import Boton from './components/Boton';
import Marcador from './components/Marcador';
import { useState } from 'react';

function App() {

  const [time, setTime] = useState({min:10, seg:0, cen:0})

  const start = () => {
    run();
    setInterval(run, 10);
  }

  var ActualizarMin = time.min
  var ActualizarSeg = time.seg
  var ActualizarCen = time.cen

  const run = () => {
    if(ActualizarSeg === 0){
      ActualizarMin--;
      ActualizarSeg = 60;
    }
    if(ActualizarCen === 0){
      ActualizarSeg--;
      ActualizarCen = 100;
    }
    ActualizarCen--;
    return setTime({min:ActualizarMin, seg:ActualizarSeg, cen:ActualizarCen})
  }

  return (
    <div className='principal'>
      <div className='tiempo'>
        <Cronometro 
        time = {time}/>
      </div>
      <div className='Inicio-pausa'>
        <Boton 
          texto="Start"
          isStart={true}
          ManejarClic={start}
        />

        <Boton 
          texto="Stop"
          isStart={false}
          ManejarClic="prueba2"
        />
      </div>
      <div className='puntos'>
        <Marcador 
          puntos="23"
          local={true}
        />
        <Marcador 
          puntos="24"
          local={false}
        />
      </div>
    </div>
    

    );
  };
export default App;
