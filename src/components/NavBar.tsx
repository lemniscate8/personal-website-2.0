import { NavLink } from "react-router"

function NavBar() {
    const baseline = "p-2 bg-white grow text-center rounded shadow-lg outline outline-black/4 md:grow-0 md:min-w-32 md:text-left md:p-4"
    const active = " font-extrabold"

    return <nav className="z-100 pb-0 p-4 sticky top-0 flex justify-between flex-row gap-2 md:p-4 md:flex md:flex-col md:justify-start md:contents-stretch md:gap-2">
        <NavLink to="/" className={({ isActive }) => isActive ? baseline + active : baseline}>
            Home
        </NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? baseline + active : baseline}>
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
