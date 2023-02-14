import { useContext } from 'react';
import { UserContext } from '../context/UseContext';

export const LoginPage = () => {
    const { user, setUser } = useContext( UserContext );

    return (
        <>
            <h1>LoginPage</h1>
            <hr/>

            <pre aria-label='pre'>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button className='btn btn-outline-success'
                    onClick={ () => setUser({ id: 123, name: 'Fernando', email: 'prueba@gmail.com' }) }>
                Establecer usuario
            </button>
        </>
    )
}
