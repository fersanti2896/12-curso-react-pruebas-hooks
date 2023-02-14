import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples";
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHook />', () => { 
    const mockIncrement = jest.fn();

    /* Valor de retorno de un custom hook */
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    /* Reinicia el ciclo de vida, o antes de todas las pruebas */
    beforeEach( () => {
        jest.clearAllMocks();
    } );

    test('Debe de mostrar el componente por defecto.', () => { 
        useFetch.mockReturnValue({ 
            data: null, 
            isLoading: true, 
            hasError: null
        });

        render( <MultipleCustomHook /> );

        expect( screen.getByText('Dr House') );
        expect( screen.getByText('Loading...') );

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });

        expect( nextButton.disabled ).toBeTruthy();
    });

    test('Debe de mostrar un quote.', () => { 
        /* Valor de retorno de un custom hook */
        useFetch.mockReturnValue({ 
            data: [{ author: 'Fernando', quote: 'Hola mundo' }], 
            isLoading: false, 
            hasError: null
        });

        render( <MultipleCustomHook /> );
        
        expect( screen.getByText('Hola mundo') ).toBeTruthy();
        expect( screen.getByText('Fernando') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect( nextButton.disabled ).toBeFalsy();
    });

    test('Debe de llamar la función de incrementar.', () => { 
        /* Valor de retorno de un custom hook */
        useFetch.mockReturnValue({ 
            data: [{ author: 'Fernando', quote: 'Hola mundo' }], 
            isLoading: false, 
            hasError: null
        });

        render( <MultipleCustomHook /> );

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        /* Para disparar el evento click */
        fireEvent.click( nextButton );

        /* Funcion de incrementar fue llamado */
        expect( mockIncrement ).toHaveBeenCalled();
    });
});