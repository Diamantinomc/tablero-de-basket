import { useState } from 'react';
import './App.css';
import Cronometro from './components/Cronometro';
import Boton from './components/Boton';

function App() {

  const [min, setMin] = useState(10);
  const [seg, setSeg] = useState(0);
  const [dec, setDec] = useState(0);
  
  
  var timer;
  const Start = (() => {

    timer = setInterval(() => {
      setDec(dec-1);

      if(dec===0) {
        setSeg(seg-1);
        setDec(9);

        if(seg===0) {
          setMin(min-1);
          setSeg(59);
        }
      }
    }, 100)

    return () => clearInterval(timer);
  });

  const Stop = () => {
    clearInterval(timer);
  }

  

  return (
    <div className='principal'>
      <div className='Cronometro'>
        <Cronometro
          min = {min<10? '0'+ min : min}
          seg = {seg<10? '0'+ seg : seg}
          dec = {dec <10? '0' + dec : dec}
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
