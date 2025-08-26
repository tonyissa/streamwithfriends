import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "@/components/ui/sonner";

export default function AppLayout() {
    return (
        <>
            <Header />
            <main className="flex-1 flex justify-center items-center pt-5! pb-12!">
                <Outlet />
            </main>
            <Toaster />
        </>
    )
}