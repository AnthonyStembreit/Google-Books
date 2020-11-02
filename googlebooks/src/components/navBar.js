import React from 'react'
import { Navbar, NavItem } from 'react-materialize'
import { Link } from 'react-router-dom'


function NavHeader() {
    return (
        <Navbar>
            <NavItem>
                <Link to="/"> Search </Link>
            </NavItem>
            <NavItem>
                <Link to="/saved"> Saved </Link>
            </NavItem>
        </Navbar>
    )
}

export default NavHeader