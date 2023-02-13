import { useState } from 'react';
import { UserContext } from './UseContext';

/* const user = {
    id: 123,
    name: 'Fernando Nicolás',
    email: 'fersanti2896@gmail.com'
}*/

export const UserProvider = ({ children }) => { 
    const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{ hola: 'mundo', user }} >
        <UserContext.Provider value={{ user, setUser }} >
            { children }
        </UserContext.Provider>
    )
}
