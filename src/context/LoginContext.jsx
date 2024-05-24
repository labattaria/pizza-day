import { useState, createContext, useCallback, useMemo } from 'react';

export const LoginContext = createContext(null);
LoginContext.displayName = "LoginContext";

const LoginContextProvider = ({ children }) => {
    const [username, setUsername] = useState(null);

    const cachedUsernameChange = useCallback((user) => setUsername(user.trim()), []);

    const memoValue = useMemo(() => (
        {
            username: username,
            onChange: cachedUsernameChange
        }
    ), [cachedUsernameChange, username]);

    return (
        <LoginContext.Provider value={memoValue}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginContextProvider;