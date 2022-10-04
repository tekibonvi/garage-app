import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>COCHERAPP</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/FormularioAdmin' className={navData => navData.isActive ? classes.active : '' }>
              CARGAR EMPLEADO
            </NavLink>
          </li>
          <li>
            <NavLink to='/EmployeeList' className={navData => navData.isActive ? classes.active : '' }>
              LISTADO EMPLEADOS
            </NavLink>
          </li>
          <li className='logOut'>
            <button>
            Cerrar Sesion
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;