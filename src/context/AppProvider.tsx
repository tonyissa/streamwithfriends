import { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";

interface AppProps {
    children: ReactNode
}

export function AppProvider({ children }: AppProps) {
    const [serverURL, setServerURL] = useState<string>("https://close-genuinely-seahorse.ngrok-free.app");
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [role, setRole] = useState<string>("");
    
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
    );
}