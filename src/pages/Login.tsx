import { ChangeEvent, useState } from "react";
import Input from "../components/Input";

export default function Login() {
    const [error, setError] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    async function handleSubmit() {

    }

    return (
        <div className="w-96 flex flex-col justify-center items-center p-8 gap-8 bg-darkGrey dark-shadow">
            <div className="w-full h-10">
                <Input placeholder="Enter your username" handleChange={handleUsernameChange} value={username} />
            </div>
            <div className="w-full h-10">
                <Input placeholder="Enter your password" handleChange={handlePasswordChange} value={password} />
            </div>
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