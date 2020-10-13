import React from 'react'

export default function Navbar() {
    return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <a class="navbar-brand" href="#">LOGO</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home</a>
                        <a class="nav-item nav-link" href="#">Professional</a>
                        <a class="nav-item nav-link" href="#">Experience</a>
                        <a class="nav-item nav-link" href="#">Portfolio</a>
                        <a class="nav-item nav-link" href="#">Contact</a>
                    </div>
                </div>
            </nav>
    )
}

