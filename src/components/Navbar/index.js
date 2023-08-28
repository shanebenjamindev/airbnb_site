import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar p-0 navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Tro thanh chu nha</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#"> ?icon? </a>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Dang ky</a>
                            <a className="dropdown-item" href="#">Dang nhap</a>
                            <a className="dropdown-item" href="#">Cho thue nha</a>
                            <a className="dropdown-item" href="#">To chuc trai nghiem</a>
                            <a className="dropdown-item" href="#">Tro giup</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
