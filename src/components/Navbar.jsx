import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="#">Apsara eShop</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link register" aria-disabled="true">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link cart" aria-disabled="true">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="" className='btn btn-outline-dark'>
                                <i className="fa fa-sign-in me-1"></i>
                                <span className="hide-sm">Login</span>
                            </NavLink>
                            <NavLink to="" className='btn btn-outline-dark ms-2'>
                                <i className="fa fa-user-plus me-1"></i>
                                <span className="hide-sm">Register</span>
                            </NavLink>
                            <NavLink to="" className='btn btn-outline-dark ms-2'>
                                <i className="fa fa-shopping-cart me-1"></i>
                                <span className="hide-sm">Cart</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar