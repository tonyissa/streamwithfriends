import { createContext, Dispatch, SetStateAction } from "react";

interface IAppContext {
    serverURL: string;
    isAuthenticated: boolean;
    username: string;
    role: string;
    setServerURL: Dispatch<SetStateAction<string>>;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    setRole: Dispatch<SetStateAction<string>>;
    setUsername: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<IAppContext>({ 
    serverURL: "",
    isAuthenticated: false,
    username: "",
    role: "",
    setServerURL: () => {},
    setIsAuthenticated: () => {},
    setRole: () => {},
    setUsername: () => {}
});