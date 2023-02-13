
import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });   

    /* En caso de que no se exponga el objeto desde el custom hook, lo podemos 
       desestructurar como normalmente se hace */
    // const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />

            <input type="text"
                   className='form-control'
                   placeholder='Username'
                   name='username'
                   value={ username }
                   onChange={ onInputChange } />

            <input type="email"
                   className='form-control mt-3'
                   placeholder='fernando@prueba.com'
                   name='email'
                   value={ email }
                   onChange={ onInputChange } />

            <input type="password"
                   className='form-control mt-3'
                   placeholder='Contraseña'
                   name='password'
                   value={ password }
                   onChange={ onInputChange } />
            
            <br />

            <button className='btn btn-success mt-2'
                    onClick={ onResetForm }>
                Borrar
            </button>
        </>
    )
}
