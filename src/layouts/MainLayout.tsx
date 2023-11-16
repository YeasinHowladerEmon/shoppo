import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Discount from "../components/Discount";

export default function MainLayout() {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <div className="w-full pt-[30px] pb-[60px] ">
                <Outlet />
            </div>
            <Discount />
            <Footer />
        </div>
    );
}