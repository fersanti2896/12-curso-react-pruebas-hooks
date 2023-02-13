import { useTodos } from '../hooks';
import { TodoAdd, TodoList } from './components';


export const TodoApp = () => {
    const { handleNewTodo, handleDeleteTodo, handleToogleTodo, todos, todosCount, pendingTodosCount } = useTodos();
    
    return (
        <>
            <h2>Todos: { todosCount } | Pendientes: { pendingTodosCount }</h2>
            <hr/>

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={ todos } 
                              onDeleteTodo={ handleDeleteTodo }
                              onToogleTodo={ handleToogleTodo } />
                </div>

                <div className='col-5'>
                    <h4>Agregar Todo</h4>
                    <hr />

                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>   
            </div>
        </>
    )
}
