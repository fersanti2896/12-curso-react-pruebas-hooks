import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../../src/08-useReducer/components/TodoItem';

describe('Pruebas en <TodoItem />', () => { 
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToogleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el TodoItem como pendiente.', () => { 
        render( <TodoItem todo={ todo } 
                          onToogleTodo={ onToogleTodoMock } 
                          onDeleteTodo={ onDeleteTodoMock }/> );

        const liElement   = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');
        
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
        expect( spanElement.className ).toContain('align-self-center');   
        expect( spanElement.className ).not.toContain('text-decoration-line-through');   
    });

    test('Debe de mostrar el TodoItem como completado.', () => {
        todo.done = true;

        render( <TodoItem todo={ todo } 
                          onToogleTodo={ onToogleTodoMock } 
                          onDeleteTodo={ onDeleteTodoMock }/> );

        const spanElement = screen.getByLabelText('span');
         
        expect( spanElement.className ).toContain('text-decoration-line-through');   
    });

    test('Debe el span llamar el ToggleTodo cuando se hace click.', () => { 
        render( <TodoItem todo={ todo } 
                          onToogleTodo={ onToogleTodoMock } 
                          onDeleteTodo={ onDeleteTodoMock }/> );
        
        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );
        
        expect( onToogleTodoMock ).toHaveBeenCalled();
        expect( onToogleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('Debe el button llamar el DeleteTodo cuando se hace click.', () => { 
        render( <TodoItem todo={ todo } 
                          onToogleTodo={ onToogleTodoMock } 
                          onDeleteTodo={ onDeleteTodoMock }/> );
        
        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toHaveBeenCalled();
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });
});