import { Outlet } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { Navbar } from './Navbar';

export const MainApp = () => {
    return (
        <UserProvider>            
            <Navbar />
            <hr/>

            <Outlet />
        </UserProvider>
    )
}
