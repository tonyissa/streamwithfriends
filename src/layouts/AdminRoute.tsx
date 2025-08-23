import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute() {
    const { role } = useContext(AppContext);

    if (role !== "admin")
        return ( <Navigate to="/home" /> )

    return ( <Outlet /> )
}