import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'

import { types } from '../../types/types'
import './Navbar.css'

export const Navbar = () => {
    // const { user } = useContext(AuthContext)
    // const { name } = user;
    const { user: { name }, dispatch } = useContext(AuthContext);
    const history = useHistory();
    const handleLogout = () => {
        dispatch({
            type: types.logout
        })
        history.replace('/login');
    }
    return (
        <nav className="navbar navbar-expand-sm bg-navbar ps-5 py-0">

            <Link
                className="navbar-brand"
                to="/"
            >
                Super Heroes
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav ">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link px-4"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link px-4"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link px-4"
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
            <p className="nav-item text-white align-middle py-auto mb-0 mx-3 fs-4 fw-bold ">
                {name}
            </p>
            <div>
                <button
                    className="nav-item nav-link btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}