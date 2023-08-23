
import './App.css';
import { Footer } from './recursos/Footer';
import Header from './recursos/Header';
import { Main } from './recursos/Main';
import { Min_dos } from './recursos/Mindos';
import { Proyectos } from './recursos/Proyectos';
import { ProyectosDos } from './recursos/ProyectosDos';

function App() {
  return (
    <div>
     <Header></Header>
     <Main></Main>
     <Min_dos></Min_dos>
     <Proyectos></Proyectos>
     <ProyectosDos></ProyectosDos>
     <Footer></Footer>
     
    </div>
  );
}

export default App;
