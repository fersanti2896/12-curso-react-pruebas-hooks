import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../../src/09-useContext/components/LoginPage';
import { UserContext } from '../../../src/09-useContext/context/UseContext';

describe('Pruebas en <LoginPage />', () => {
    const user = {
        id: 1,
        name: 'Fer Santi',
        email: 'fersanti2896@gmail.com'
    } 

    test('Debe hacer match con el snapshot.', () => { 
        const { container } = render( <UserContext.Provider value={{ user }}> 
                                        <LoginPage />
                                      </UserContext.Provider>);

        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el componente sin el usuario.', () => { 
        render( <UserContext.Provider value={ {user: null} }> 
                    <LoginPage />
                </UserContext.Provider>);

        const preTag = screen.getByLabelText('pre').innerHTML;
        expect( preTag ).toBe('null');
    });

    test('Debe de llamar el setUser cuando se hace click en el boton.', () => { 
        const setUserMock = jest.fn();

        render( <UserContext.Provider value={{ user, setUser: setUserMock }}> 
                    <LoginPage />
                </UserContext.Provider>);
        
        const userButton = screen.getByRole('button', { name: 'Establecer usuario' });
        fireEvent.click( userButton );

        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith( { id: 123, name: 'Fernando', email: 'prueba@gmail.com' } );
    });
});