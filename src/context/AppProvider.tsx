import { ReactNode, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

interface AppProps {
    children: ReactNode
}

export function AppProvider({ children }: AppProps) {
    const [serverURL, setServerURL] = useState<string>(localStorage.getItem("serverURL") ?? "");
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [role, setRole] = useState<string>("");

    useEffect(() => {
        if (serverURL)
            localStorage.setItem("serverURL", serverURL)
        else
            localStorage.removeItem("serverURL");
    }, [serverURL])
    
    return (
        <AppContext.Provider 
            value={{
                serverURL,
                setServerURL,
                isAuthenticated,
                setIsAuthenticated,
                username,
                setUsername,
                role,
                setRole
            }}
        >
            {children}
        </AppContext.Provider>
    )
}