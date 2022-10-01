import React,{Fragment} from 'react'
import Navbar from '../Navegacion/Navbar'
import FormularioAdmin from './FormularioAdmin'

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function PagPrincipal() {
  return (
    <Fragment>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact component = {FormularioAdmin}/>
                <Route path='/pagprincipal' component = {PagPrincipal}/>
            </Routes>
        </Router>

    </Fragment>
  )
}

export default PagPrincipal;