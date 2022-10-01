import './App.css';
import Navbar from './components/Navbar/Navegacion/Navbar';
import PagPrincipal from './components/Navbar/Paginas/PagPrincipal';
//import FormularioAdmin from './components/Navbar/Paginas/FormularioAdmin';
import {useFirebaseApp} from 'reactfire';
import Formulario from './components/Navbar/Paginas/FormularioAdmin';



function App() {
  const firebase = useFirebaseApp();
  console.log(firebase)
  return (
    <div className="App">
      <PagPrincipal/>
      <Formulario/>
    </div>
  );
}

export default App;
