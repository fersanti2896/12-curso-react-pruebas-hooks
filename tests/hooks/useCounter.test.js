import { renderHook } from "@testing-library/react";
import { string } from "prop-types";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en useCounter', () => { 
    test('Debe retornar valor por defecto.', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;
        
        expect( counter ).toBe(1);
        expect( decrement ).toEqual( expect.any(Function) );
        expect( increment ).toEqual( expect.any(Function) );
        expect( reset ).toEqual( expect.any(Function) );
    });

    test('Debe de generar el counter con el valor de 100.', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);
    });

    test('Debe de incrementar el contador.', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act( () => {
            increment(2);
            increment(2);
        });

        expect( result.current.counter ).toBe(104);
    });

    test('Debe de decrementar el contador.', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement(2);
            decrement(2);
        });

        expect( result.current.counter ).toBe(96);
    });

    test('Debe de realizar el reset en el contador.', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { decrement, reset } = result.current;

        act( () => {
            decrement(8);
            reset();
        });

        expect( result.current.counter ).toBe(100);
    });
});