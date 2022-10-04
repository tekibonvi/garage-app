import React, { useState,Fragment } from 'react'
import arrayData from './FormularioAdmin';

/*let data = [{ 
  name:'francisco',
  lastname : 'mule',
  date : '',
  phone : '',
  sucursal:'',
  email : '',
  password : ''
 },{ 
  name:'ignacio',
  lastname : 'mule',
  date : '',
  phone : '',
  sucursal:'',
  email : '',
  password : ''
 },
 { 
  name:'juani',
  lastname : 'mule',
  date : '',
  phone : '',
  sucursal:'',
  email : '',
  password : ''
 }];
*/
const EmployeeList = () => {

  const[filterName, setFilterName] = useState('all');

  const dataChangeHandler = (event) =>{
    setFilterName(event.target.value);
  }

  const cardMapped = arrayData.filter((item)=> item.name === filterName)/*.map(()=>
    <FormularioAdmin
      key = {data.dni}
      name = {data.nombre}
      lastname = {data.apellido}
      date = {data.fecha}
      phone = {data.telefono}
      sucursal = {data.sucursal}
      email = {data.email}
      password = {data.password}
    />)*/
    console.log(cardMapped)
  return (
    <Fragment>
        <input type='text' placeholder= 'Buscar por NOMBRE o DNI...' onChange={dataChangeHandler}/>
    </Fragment>
  )
}

export default EmployeeList;