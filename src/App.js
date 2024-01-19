import './App.css';
import Cronometro from './components/Cronometro';
import Boton from './components/Boton';
import Marcador from './components/Marcador';

function App() {

  return (
    <div className='principal'>
      <div className='tiempo'>
        <Cronometro />
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
