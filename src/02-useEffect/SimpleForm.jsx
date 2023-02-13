
import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'Fernando',
        email: 'fer@prueba.com'
    })

    const { username, email } = formState;

    /* Función que permite cambiar el valor de un input */
    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(() => {
        // console.log('useEffect called')
    }, []);

    useEffect(() => {
        // console.log('formState change')
    }, [formState]);

    useEffect(() => {
        // console.log('email change')
    }, [email]);
    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input type="text"
                   className='form-control'
                   placeholder='Username'
                   name='username'
                   value={ username }
                   onChange={ onInputChange } />

            <input type="email"
                   className='form-control mt-3'
                   placeholder='fersanti2896@prueba.com'
                   name='email'
                   value={ email }
                   onChange={ onInputChange } />
            
            <br />
            {
                (username === 'Fernando') && <Message /> 
            }
        </>
    )
}
