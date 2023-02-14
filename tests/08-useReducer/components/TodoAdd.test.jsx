import { render } from "@testing-library/react";
import { TodoAdd } from "../../../src/08-useReducer/components/TodoAdd";

describe('Pruebas en <TodoAdd />', () => { 
    test('Debe hacer match con en el snapshot', () => { 
        const { container } = render( < TodoAdd /> );
        console.log(container)

        expect( container ).toMatchSnapshot();
    });
});