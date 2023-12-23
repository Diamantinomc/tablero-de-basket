import { useState } from 'react';
import './App.css';
import Cronometro from './components/Cronometro';
import Boton from './components/Boton';

function App() {

  const [time, setTime] = useState({min:10, seg:0, mil:0});
  const [intervalo, setIntervalo] = useState();
  
  const Start = () => {
    run();
    setIntervalo(setInterval(run, 10));
  };

  var min = time.min;
  var seg = time.seg;
  var mil = time.mil;

  const run = () => {
    if(seg === 0) {
      min--;
      seg = 60;
    }

    if(mil === 0) {
      seg--;
      mil = 100;
    }
  
    mil--;
    return setTime({ min:min, seg:seg, mil:mil })
  }

  const Stop = () => {
    clearInterval(intervalo);
  }

  return (
    <div className='principal'>
      <div className='Cronometro'>
        <Cronometro
          time = {time}
        />
      </div>
      <div className='Start'>
        <Boton
          nombre= 'Start'
          onClick={Start}
        />
      </div>
      <div className='Stop'>
        <Boton
          nombre = 'Stop'
          onClick={Stop}
        />
      </div>
      
    </div>
    

    );
  };
export default App;
