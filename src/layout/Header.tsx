import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="my-3! mx-4!">
            <h1 
                onClick={() => navigate("/")}
                className="text-4xl text-tealqoise p-4 cursor-pointer"
            >
                StreamWithFriends
            </h1>
        </header>
    );
}