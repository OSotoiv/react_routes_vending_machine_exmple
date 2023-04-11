import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="NavBar">
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/chips">
                Chips
            </NavLink>
            <NavLink exact to="/soda">
                Soda
            </NavLink>
            <NavLink exact to="/cookies">
                Cookies
            </NavLink>
        </nav>
    )
}
export default Nav;