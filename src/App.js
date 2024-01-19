import './App.css';
import Cronometro from './components/Cronometro';
import Boton from './components/Boton';

function App() {

  return (
    <div className='principal'>
      <Cronometro />
      <Boton 
      texto="Start"
      isStart={true}
      ManejarClic="prueba"/>

<Boton 
      texto="Stop"
      isStart={false}
      ManejarClic="prueba2"/>
    </div>
    

    );
  };
export default App;
