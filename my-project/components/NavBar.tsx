'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react"

const NavBar = () => {
    return(
        Navbar()
    );
}

export default function Navbar() {
    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return (
        <body>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Acerca de nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Ofertas</a>
                  </li>
                  <li>
                        <hr className="dropdown-divider"></hr>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Consolas
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Sony</a></li>
                      <li><a className="dropdown-item" href="#">Xbox</a></li>
                      <li><a className="dropdown-item" href="#">Nintendo</a></li>
                      <li><a className="dropdown-item" href="#">Otros</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
              <span className="navbar-brand mx-auto text-center press-start-2p-regular">
                The Old Reliable
              </span>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Que necesitas?" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
          </nav>
        </body>
    );
}