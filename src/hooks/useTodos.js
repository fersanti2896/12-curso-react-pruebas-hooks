import { useEffect, useReducer, useState } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

/**
 * Función que se encarga de cargar los todos.
 * @returns Devuelve un arreglo de JSON de los todos
 */
const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = () => {
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );
    
    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify(todos) );
    }, [ todos ])
    
    /**
     * Función que agrega un todo al arreglo de todos.
     * @param {Object} todo Ejemplo: { id: 1, description: 'Gema del porder', done: false }
     */
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
    
        dispatch( action );
    }

    /**
     * Función que elimina un todo por su id.
     * @param {string} id 
     */
    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    /**
     * Función que marca un todo como completado por su id.
     * @param {string} id 
     */
    const handleToogleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        handleDeleteTodo, 
        handleNewTodo, 
        handleToogleTodo,
        todos, 
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length
    }
}
