import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { AuthResponse } from "../types/Responses";

export default function RootHandler() {
    const { serverURL, setIsAuthenticated, setUsername, setRole} = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function performChecks() {
            if (!serverURL) {
                navigate("/server-setup");
                return;
            }

            try {
                const healthResponse = await fetch(`${serverURL}/api/health`);
                if (!healthResponse.ok)
                    throw new Error("Health check failed");

                const authResponse = await fetch(`${serverURL}/api/auth/verify`, { credentials: 'include' });
                if (authResponse.ok) {
                    const data: AuthResponse = await authResponse.json();
                    setIsAuthenticated(true);
                    setUsername(data.username);
                    setRole(data.role);
                    navigate("/home");
                } else {
                    navigate("/login");
                }
            } catch (err) {
                console.error("Check failed: ", err);
                navigate("server-setup", { state: { err: "There was an error with your request." } });
            }
        }

        performChecks();
    }, [navigate, serverURL, setIsAuthenticated, setRole, setUsername]);

    return <div>Loading...</div>;
}