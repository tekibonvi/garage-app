import React from 'react';
import { useForm } from "react-hook-form";
import Calendario from './Calendar';

import './FormularioAdmin.css'

const Formulario = () => {
    
    const {register, formState: {errors},watch ,handleSubmit} = useForm();
    
    const onSubmit = (data) =>{
        console.log(data);
    }

    const incluirCorreo = watch('incluirCorreo');

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
                        <Calendario {...register('fecha',{
                            required: false
                        })} />
                        {errors.fecha?.type === 'required' && <p>El campo es obligatorio</p>}

                    </div>

                    <div>
                        <label>TELEFONO: </label>
                        <input type='number' {...register('telefono', {
                            required: true,
                            minLength: 7,
                            maxLength: 13
                        })}/>
                        {errors.telefono?.type === 'maxLength' && <p>El telefono debe tener 12 o menos numeros</p>}
                        {errors.telefono?.type === 'minLength' && <p>El telefono debe tener 8 o mas numeros</p>}
                    </div>

                    <div>
                        <label>SUCURSAL: </label>
                        <select{...register('sucursal', {
                            required: true
                        })}>
                        {errors.sucursal?.type === 'required' && <p>Este campo es obligatorio</p>}
                            <option disabled selected value=''>Seleccione una opcion</option>
                            <option value='suc-1'>Sucursal 1</option>
                            <option value='suc-2'>Sucursal 2</option>
                            <option value='suc-3'>Sucursal 3</option>
                        </select>
                    </div>

                    <div>
                        <label>¿Incluir correo electronico?</label>
                        <input type='checkbox' {...register('incluirCorreo')}/>
                    </div>
                    { incluirCorreo && (
                        <div>
                            <label>CORREO: </label>
                            <input type='text' {...register('correo',{
                                pattern:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
                            })}/>
                            {errors.correo?.type === 'pattern' && <p>El formato de correo es incorrecto</p>}
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
                <h4>FECHA DE NACIMIENTO: {watch('fecha')}</h4>
                <h4>TELEFONO: {watch('telefono')}</h4>
                <h4>SUCURSAL: {watch('sucursal')}</h4>
                <h4>CORREO: {watch('correo')}</h4>
            </div>

        </div>
    );
}
 
export default Formulario;