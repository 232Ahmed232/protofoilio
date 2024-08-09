import { NavLink, Link } from "react-router-dom";

function Navbar() {

    const navbarclass = "font-bold  text-center mx-2 drop-shadow-xl italic tracking-widest  px-2 rounded-xl hover:text-black w-1/3 hover:drop-shadow-xl "

    const active = "text-red-700 p-1 rounded-lg  bg-red-50 drop-shadow-none"
    return (
        <>
                <ul className="flex  drop-shadow-xl shadow-inner shadow-slate-400 justify-center text-slate-900 mt-4 bg-slate-200 rounded-3xl mx-auto w-72 items-center px-2">
                    
                        <li className={navbarclass}>
                            <NavLink to="/"
                                className={({ isActive }) => {
                                    return ` ${isActive ? active : " "}`
                                }}
                            >
                                Frontend
                            </NavLink>
                        </li>
                        <div className="h-8 border-2 border-slate-400"></div>

                        <li className={navbarclass}>
                            <NavLink to={"/backend"}
                                className={({ isActive }) => {
                                    return `${isActive ? active : " "}`
                                }}>
                                Fullstack
                            </NavLink>
                        </li>
                        <div className="h-8 border-2 border-slate-400"></div>

                        <li className={navbarclass}>
                            <NavLink to={"/cv"}

                                className={({ isActive }) => {
                                    return `${isActive ? active : ""}`
                                }}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>

        </>
    )
}

export default Navbar;
