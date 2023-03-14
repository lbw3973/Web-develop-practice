import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="/posts">
                Posts
            </NavLink>{' '}
            |{' '}
            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="/users">
                Users
            </NavLink>
        </nav>
    )
}

export default Nav
