import React from 'react'
import { NavLink } from 'react-router-dom'

import '../App.css';

const MainMenu = () => (
    <div>
        <NavLink className="main-menu--link" to="/movies" activeClassName="active">Movies</NavLink>
        <NavLink className="main-menu--link" to="/featured" activeClassName="active">Featured</NavLink>
    </div>
)

export default MainMenu