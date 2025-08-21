import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
    return (
        <>
            <Header />
            <main className="flex-1 flex justify-center items-center">
                <Outlet />
            </main>
        </>
    )
}