import { NavLink } from "react-router"

function NavBar() {
    const baseline = "min-w-32 items-left rounded p-4 shadow-lg outline outline-black/4"
    const active = " font-extrabold"
    return <nav className="flex flex-col justify-start contents-stretch gap-2 ">
        <NavLink to="/" className={({ isActive }) => isActive ? baseline + active : baseline}>
            Home
        </NavLink>
        <NavLink to="/live-resume" className={({ isActive }) => isActive ? baseline + active : baseline}>
            Experience
        </NavLink>
        <NavLink to="/research" className={({ isActive }) => isActive ? baseline + active : baseline}>
            Reseach
        </NavLink>
        <NavLink to="/teaching" className={({ isActive }) => isActive ? baseline + active : baseline}>
            Teaching
        </NavLink>
    </nav >
}

export default NavBar
