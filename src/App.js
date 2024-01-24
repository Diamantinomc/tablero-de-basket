import './App.css';
import Cronometro from './components/Cronometro';
import Boton from './components/Boton';
import Marcador from './components/Marcador';
import { useState } from 'react';

function App() {

  const [time, setTime] = useState({min:0, seg:0, mil:0})

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
          ManejarClic="prueba"
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
