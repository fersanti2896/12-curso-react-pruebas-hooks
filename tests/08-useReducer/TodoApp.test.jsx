import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en <TodoApp />', () => { 
    useTodos.mockReturnValue({
        handleDeleteTodo: jest.fn(), 
        handleNewTodo: jest.fn(), 
        handleToogleTodo: jest.fn(), 
        pendingTodosCount: 1,
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true }
        ], 
        todosCount: 2
    });

    test('Debe hacer match con en snapshot.', () => { 
        const { container } = render( <TodoApp /> );

        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el componente correctamente.', () => { 
        render( <TodoApp /> );

        expect( screen.getByText('Todo #1') ).toBeTruthy();
        expect( screen.getByText('Todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
        expect( screen.getByRole('textbox').placeholder ).toBe('¿Qué hay que hacer?');
    });
});