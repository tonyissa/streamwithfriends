import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
    const { isAuthenticated } = useContext(AppContext);

    if (!isAuthenticated)
        return ( <Navigate to="/" /> )

    return ( <Outlet /> )
}