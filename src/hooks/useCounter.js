import { useState } from "react"

export const useCounter = ( initialValue = 1 ) => {
    const [counter, setCounter] = useState( initialValue );

    /* Función que se expone al useCounter */
    const increment = ( value = 1 ) => {
        setCounter( (counter) => counter + value );
    }

    const decrement = ( value = 1 ) => {
        if ( counter === 0 ) return;

        setCounter( (counter) => counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}