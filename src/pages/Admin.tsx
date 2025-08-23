import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CodeResponse } from "../types/Responses";
import { toast } from "sonner";

export default function AdminPage() {
    const { serverURL } = useContext(AppContext);

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
        <div className="w-96 flex flex-col justify-center items-center p-8 gap-8 bg-darkGrey dark-shadow">

            <button
                className="bg-tealqoise py-2 px-3 w-1/2 cursor-pointer text-[#18181d] text-[16px] rounded-md transition-all teal-shadow"
                onClick={handleInviteGenerate}
                >
                    Get Invite Code
            </button>
        </div>
    );
}