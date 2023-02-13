import { useRef } from 'react';

export const FocusScreen = () => {
    const inpuRef = useRef();

    const onClick = () => {
        inpuRef.current.select();
    }
 
    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input className='form-control'
                   placeholder='Ingrese su nombre'
                   ref={ inpuRef }
                   type="text" />

            <button className='btn btn-primary mt-3'
                    onClick={ onClick }>
                Set Focus
            </button>
        </>
    )
}
