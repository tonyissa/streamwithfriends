import { useContext } from "react";
import { Link } from "react-router-dom"
import { AppContext } from "../context/AppContext";

export default function Header() {
    const { role } = useContext(AppContext);

    return (
        <header className="my-3! mx-4! flex justify-between items-center">
            <Link to="/"
                className="text-4xl text-tealqoise p-4 cursor-pointer"
            >
                StreamWithFriends
            </Link>
            {role == "admin" && 
                <Link
                    to="/admin"
                    className="text-[#FF00B7] text-lg cursor-pointer p-4"
                    >
                        Admin Portal
                </Link>}
        </header>
    );
}