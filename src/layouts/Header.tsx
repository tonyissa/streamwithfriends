import { useContext } from "react";
import { Link } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import { CodeResponse } from "@/types/Responses";
import { toast } from "sonner";

export default function Header() {
    const { role, serverURL } = useContext(AppContext);

    async function handleInviteGenerate() {
        try {
            const response = await fetch(`${serverURL}/api/admin/generate-code`, {
                credentials: "include",
                headers: { "ngrok-skip-browser-warning": "true" }
            })
            const data: CodeResponse = await response.json();
            const code = data.code;
            window.navigator.clipboard.writeText(code);
            toast("Invite code copied to clipboard")
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <header className="mt-3! mx-4! flex justify-between items-center">
            <Link to="/"
                className="text-4xl text-tealqoise p-4 cursor-pointer"
            >
                StreamWithFriends
            </Link>
            {role == "admin" && 
                <button
                    className="bg-tealqoise py-2 px-3 cursor-pointer text-[#18181d] text-[16px] rounded-md transition-all teal-shadow"
                    onClick={handleInviteGenerate}
                >
                    Generate Invite
                </button>
            }
        </header>
    );
}