import { createBrowserRouter } from 'react-router-dom';
import { AboutPage, ErrorPage, HomePage, LoginPage } from '../09-useContext/components';
import { MainApp } from '../09-useContext/MainApp';

export const getRoutes = () => createBrowserRouter([
    {
        path: '/',
        element: <MainApp />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            }
        ]
    }
]);
