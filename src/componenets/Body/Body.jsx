import { NavLink, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Body() {
    return (
        <>
            <div className="bg-red-200 h-96 border-solid border-8  border-red-900">

                <Navbar />
                <Outlet />
            </div>

        </>
    )
}

export default Body;