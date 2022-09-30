import React,{Fragment} from 'react'
import Navbar from '../Navegacion/Navbar'
import FormularioAdmin from './FormularioAdmin'

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

function PagPrincipal() {
  return (
    <Fragment>
        <Router>
            <Navbar/>
            <FormularioAdmin/>
        </Router>
        
    </Fragment>
  )
}

export default PagPrincipal