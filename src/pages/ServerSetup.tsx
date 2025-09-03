import { ChangeEvent, useContext, useState } from "react";
import Input from "../components/Input";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function ServerSetup() {
    const location = useLocation();
    const err = location.state?.err;
    const navigate = useNavigate();
    const { serverURL, setServerURL } = useContext(AppContext);
    const [input, setInput] = useState<string>(serverURL);
    const [error, setError] = useState<string>(err);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const field = e.target.value;
        if (input.endsWith("/"))
            setInput(field.slice(0, field.length - 1));
        else
            setInput(field);
    }

    function handleSubmit() {
        if (!input) {
            setError("Please set a server URL");
            return;
        } else if (!input.endsWith(".app")) {
            setError("Invalid server URL");
            return;
        }

        setServerURL(input);
        navigate("/", { state: { from: "server-setup" } });
    }

    return (
        <div className="w-96 flex flex-col justify-center items-center p-8 gap-8 bg-darkGrey dark-shadow">
            <div className="w-full h-10">
                <Input placeholder="Enter your server URL" handleChange={handleChange} value={input} />
            </div>
            <button 
                className="bg-tealqoise py-2 px-3 w-1/2 cursor-pointer text-[#18181d] text-[16px] rounded-md transition-all teal-shadow"
                onClick={handleSubmit}
            >
                Submit
            </button>
            <div className={`text-sm text-red-500`}>{error}</div>
        </div>
    );
}