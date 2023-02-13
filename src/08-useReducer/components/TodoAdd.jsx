import { useForm } from '../../hooks';

export const TodoAdd = ({ onNewTodo }) => {
    const { onInputChange, description, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        }

        onNewTodo( newTodo );
        onResetForm();
    }

    return (
        <>
            <form onSubmit={ (event) => onFormSubmit(event) }>
                <input type='text'
                       className='form-control'
                       placeholder='¿Qué hay que hacer?'
                       name='description'
                       onChange={ onInputChange }
                       value={ description } />

                <button className='btn btn-outline-success mt-2'
                        type='submit' >
                    Agregar
                </button>
            </form>
        </>
    )
}
