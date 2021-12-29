import React from 'react';
import { useHistory } from 'react-router-dom';
import navbarCss from "./Navbar.module.css";
import logo from '../../../images/logo.png'

const Navbar = () => {
    const history = useHistory();
    return (
        // <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" onClick={() => history.push("/home")}><img src={logo} width="100" alt="" srcset="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" onClick={() => history.push("/home")}>
                            <a class="nav-link active" aria-current="page" href="#" onClick={() => history.push("/home")}>Home</a>
                        </li>
                        <li class="nav-item" onClick={() => history.push("/signup")}>
                            <a class="nav-link" href="#">Signup</a>
                        </li>
                        <li class="nav-item" onClick={() => history.push("/")}>
                            <a class="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // </div>
    )
}

export default Navbar
