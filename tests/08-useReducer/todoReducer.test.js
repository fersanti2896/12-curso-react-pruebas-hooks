import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en todoReducer.', () => { 
    const initialState = [
        {
            id: 1,
            description: 'Demo Todo',
            done: false 
        },
        {
            id: 2,
            description: 'Demo Todo 2',
            done: false 
        }
    ];

    test('Debe de regresar el estado inicial.', () => { 
        const newState = todoReducer( initialState, {} );
        
        expect( newState ).toBe( initialState );
    });

    test('Debe de agregar un Todo.', () => { 
        const action = { 
            type: '[TODO] Add Todo',
            payload: {
                id: 3,
                description: 'Nuevo Todo',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe(3);
        expect( newState ).toContain( action.payload );
    });

    test('Debe de eliminar un Todo.', () => { 
        const action = { 
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        
        expect( newState.length ).toBe(1);
    });

    test('Debe de realizar el cambio del Toogle Todo.', () => { 
        const action = { 
            type: '[TODO] Toggle Todo',
            payload: 2
        };

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe(2);
        expect( newState[0].done ).toBe( false );
        expect( newState[1].done ).toBe( true );
    });
});