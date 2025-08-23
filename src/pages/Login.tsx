import { ChangeEvent, useContext, useState } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import type { LoginResponse } from "../types/Responses";

export default function Login() {
    const { serverURL, setRole, setUsername, setIsAuthenticated } = useContext(AppContext);
    const [error, setError] = useState<string>("");
    const [userField, setUserField] = useState<string>("");
    const [passField, setPassField] = useState<string>("");
    const navigate = useNavigate();

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setUserField(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassField(e.target.value);

    async function handleSubmit() {
        if (!userField || !passField) {
            setError("Please enter all fields");
            return;
        }

        try {
            const response = await fetch(`${serverURL}/api/auth/login`, { 
                headers: { 
                    "ngrok-skip-browser-warning": "true",
                    "Content-Type": "application/json"
                },
                credentials: "include",
                method: "POST",
                body: JSON.stringify({ username: userField, password: passField })
            });

            const data: LoginResponse = await response.json(); 

            if (!response.ok)
                throw new Error(data.message);
            else {
                setIsAuthenticated(true);
                setRole(data.role);
                setUsername(data.username);
                navigate("/home");
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        }
    }

    return (
        <div className="w-96 flex flex-col justify-center items-center p-8 gap-8 bg-darkGrey dark-shadow">
            <div className="w-full h-10">
                <Input placeholder="Enter your username" handleChange={handleUsernameChange} value={userField} />
            </div>
            <div className="w-full h-10">
                <Input placeholder="Enter your password" handleChange={handlePasswordChange} value={passField} password={true} />
            </div>
            <Link to="/register" className="link text-sm">Trying to register instead?</Link>
            <button
                className="bg-tealqoise py-2 px-3 w-1/2 cursor-pointer text-[#18181d] text-[16px] rounded-md transition-all teal-shadow"
                onClick={handleSubmit}
                >
                    Login
            </button>
            <div className={`text-sm text-red-500`}>{error}</div>
        </div>
    );
}