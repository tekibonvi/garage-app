import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link class="nav-link" to='/'>Ingresar empleado</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/pagprincipal'>Lista empleados</Link>
              </li>
            </ul>
          </div>
          <Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="35" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
          </Link>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;