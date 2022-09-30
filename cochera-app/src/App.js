import './App.css';
import FormularioAdmin from './components/Navbar/Paginas/FormularioAdmin';
import {useFirebaseApp} from 'reactfire';



function App() {
  const firebase = useFirebaseApp();
  console.log(firebase)
  return (
    <div className="App">
      <FormularioAdmin/>
    </div>
  );
}

export default App;
