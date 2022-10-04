import {
  Route,
  RouterProvider,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import NotFound from "./Pages/NotFound";
import FormularioAdmin from "./Pages/FormularioAdmin";
import EmployeeList from "./Pages/EmployeeList";

import {useFirebaseApp} from 'reactfire';

import './App.css';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate replace to="/FormularioAdmin" />} />
      <Route path="/FormularioAdmin" element={<FormularioAdmin/>} />
      <Route path="/EmployeeList" element={<EmployeeList />} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
);

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase)
  return <RouterProvider router={router} />;
}

export default App;
