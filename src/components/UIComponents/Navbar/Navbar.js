import React from 'react';
import { useHistory } from 'react-router-dom';
import navbarCss from "./Navbar.module.css";
import logo from '../../../images/logo.png'

const Navbar = () => {
    const history = useHistory();
    return (
        // <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" onClick={() => history.push("/home")}><img src={logo} width="100" alt="" srcSet="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={() => history.push("/home")}>
                            <a className="nav-link active" aria-current="page" href="#" onClick={() => history.push("/home")}>Home</a>
                        </li>
                        <li className="nav-item" onClick={() => history.push("/signup")}>
                            <a className="nav-link" href="#">Signup</a>
                        </li>
                        <li className="nav-item" onClick={() => history.push("/")}>
                            <a className="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // </div>
    )
}

export default Navbar
