import React from "react";

function Navbar() {

    return(
        <nav className="navbar navbar-dark bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Start Bootstrap</a>
                <div id="navbarNav">
                <ul class="d-flex flex-row navbar-nav">
                    <li class="nav-item mx-2">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item mx-2">
                    <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item mx-2">
                    <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item mx-2">
                    <a class="nav-link disabled" href="#" tabindex="-1">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;