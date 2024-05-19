import { useState, createContext, useCallback } from 'react';

export const LoginContext = createContext(null);
LoginContext.displayName = "LoginContext";

const LoginContextProvider = ({ children }) => {
    const [username, setUsername] = useState(null);

    const cachedUsernameChange = useCallback((user) => setUsername(user.trim()), []);

    const value = {
        username: username,
        onChange: cachedUsernameChange
    };

    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginContextProvider;