import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Pruebas en <MainApp />', () => { 
    test('Debe de mostrar el LoginPage.', () => { 
        render( <MemoryRouter initialEntries={[ '/login' ]}>
                    <MainApp />
                </MemoryRouter> );

        const loginPage      = screen.getByText('Login');
        const loginPageClass = screen.getAllByRole('link');
        
        expect( loginPage ).toBeTruthy();
        expect( loginPageClass[3].className ).toBe('nav-link active');
    });

    test('Debe de mostrar el AboutPage.', () => { 
        render( <MemoryRouter initialEntries={[ '/about' ]}>
                    <MainApp />
                </MemoryRouter> );

        screen.debug();
        const aboutPage      = screen.getByText('About');
        const aboutPageClass = screen.getAllByRole('link');
        
        expect( aboutPage ).toBeTruthy();
        expect( aboutPageClass[2].className ).toBe('nav-link active');
    });
}); 