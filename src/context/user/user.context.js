import React from 'react';

export const UserContext = React.createContext()
const initialState = {
    currentUser: null,
}

const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState(initialState);
    /* use effect and get locastograge current user */
    React.useEffect(() => {
        const userFromLocalStorage = localStorage.getItem('user');
        if (userFromLocalStorage) {
            const userLSparse = JSON.parse(userFromLocalStorage);
            setUser(userLSparse);
        }
    }, []);
    /* set user in localstorage */
    const setUserInLocalStorage = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
    };

    const setCurrentUser = (user) => {
        console.log(user);
        setUser(user);
        setUserInLocalStorage(user);
    }
    const logOutUser = () => {
        setUser(null);
        setUserInLocalStorage(null);
    }
    const value = {
        currentUser: user,
        setCurrentUser,
        logOutUser,
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider