import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Layout () {
    return (
        <div className="py-4 px-24 flex flex-col min-h-screen">
            <Header />
            <Outlet />
        </div>
    );
}