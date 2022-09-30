import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';

import './FormularioAdmin.css'

const Formulario = () => {
    
    const {register, formState: {errors} ,watch ,handleSubmit} = useForm();
    
    const onSubmit = (data) =>{
        console.log(data)
    };

    const [date, setDate] = useState();

    const changeDate = (event) =>{
        let aux = (event.target.value);
        setDate(aux)
        //console.log(typeof event.target.value)
    };

    const inicioSesion = watch('inicioSesion');
    

    return (
        <div className='all-form'>
            <div >
                <h2 className='title'>INGRESO NUEVO EMPLEADO</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='form-card'>
                    <div>
                        <label>NOMBRE: </label>
                        <input type='text' {...register('nombre', {
                            required: true
                        })}/>
                        {errors.nombre?.type === 'required' && <p>Este campo es obligatorio</p>}
                    </div>

                    <div>
                        <label>APELLIDO: </label>
                        <input type='text' {...register('apellido', {
                            required: true
                        })}/>
                        {errors.apellido?.type === 'required' && <p>Este campo es obligatorio</p>}

                    </div>

                    <div>
                        <label>DNI: </label>
                        <input type='text' {...register('dni', {
                            required: true,
                            maxLength: 8,
                            minLength: 7
                        })}/>
                        {errors.dni?.type === 'required' && <p>El campo es obligatorio</p>}
                        {errors.dni?.type === 'maxLength' && <p>El DNI no debe tener mas de 8 numeros</p>}
                        {errors.dni?.type === 'minLength' && <p>El DNI no debe tener menos de 7 numeros</p>}

                        
                    </div>
                    
                    <div className='calendario'>
                        <label>FECHA DE NACIMIENTO: </label>
                        <input type='date' {...register('fecha',{
                            required: true,
                            min:'2006-09-29'})}
                            value={date}
                            onChange={changeDate}
                        />
                        {errors.fecha?.type === 'required' && <p>Este campo es obligatorio</p>}
                        {errors.fecha?.type === 'min' && <p>La persona cargada es menor de edad</p>}

                    </div>

                    <div>
                        <label>TELEFONO: </label>
                        <input type='number' {...register('telefono', {
                            required: true,
                            minLength: 7,
                            maxLength: 13
                        })}/>
                        {errors.telefono?.type === 'requiredC' && <p>Este campo es obligatorio</p>}
                        {errors.telefono?.type === 'maxLength' && <p>El telefono debe tener 12 o menos numeros</p>}
                        {errors.telefono?.type === 'minLength' && <p>El telefono debe tener 8 o mas numeros</p>}
                    </div>

                    <div>
                        <label>SUCURSAL: </label>
                        <select {...register('sucursal', {
                            required: true
                        })}>
                        {errors.sucursal?.type === 'required' && <p>Este campo es obligatorio</p>}
                            <option disabled selected defaultValue=''>Seleccione una opcion</option>
                            <option value='suc-1'>Sucursal 1</option>
                            <option value='suc-2'>Sucursal 2</option>
                            <option value='suc-3'>Sucursal 3</option>
                        </select>
                    </div>

                    <div>
                        <label>DATOS INICIO DE SESION</label>
                        <input type='checkbox' {...register('inicioSesion')}/>
                    </div>
                    { inicioSesion && (
                        <div>
                            <label>CORREO: </label>
                            <input type='text' {...register('correo',{
                                pattern:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
                            })}/>
                            {errors.correo?.type === 'pattern' && <p>El formato de correo es incorrecto</p>}
                        
                            <label>CONTRASEÑA:</label>
                            <input type='password' {...register('password', {
                            required: true,
                            minLength: 6,
                            maxLength: 18,
                            })}/>
                            {errors.password?.type === 'required' && <p>Este campo es obligatorio</p>}
                            {errors.password?.type === 'minLength' && <p>La contraseña debe tener al menos 6 caracteres</p>}
                            {errors.password?.type === 'maxLength' && <p>La contraseña debe tener menos de 18 caracteres</p>}
                        </div>
                    )}
                    
                    
                    <input type='submit' value='Enviar' className='btn btn-green'/>
                </form>
            </div>
            
            <div className='show-card'>
                <h2>DATOS DEL EMPLEADO</h2>
                <h4>NOMBRE: {watch('nombre')}</h4>
                <h4>APELLIDO: {watch('apellido')}</h4>
                <h4>DNI: {watch('dni')}</h4>
                <h4>FECHA DE NACIMIENTO: {date}</h4>
                <h4>TELEFONO: {watch('telefono')}</h4>
                <h4>SUCURSAL: {watch('sucursal')}</h4>
                <h4>CORREO: {watch('correo')}</h4>
            </div>

        </div>
    );
}
 
export default Formulario;