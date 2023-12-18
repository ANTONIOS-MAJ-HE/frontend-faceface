import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Asegúrate de tener 'react-icons' instalado

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
        <span className="brand-name">  Período 2023 - 2</span>
        </Link>
        
      </div>
      <div className="nav-menu">
        
        <div className="nav-item dropdown">
          <button className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Opciones <FaUserCircle />
          </button>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <Link className="dropdown-item" to="/perfil">Perfil</Link>
            </li>
            <li>
            <Link className="dropdown-item" to="/cursos" >Cursos</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
