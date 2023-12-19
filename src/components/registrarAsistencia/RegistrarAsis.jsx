import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AddSesion from './AddSesion';
//import Navbar from '../cursos/Navbar';
import HeadRegistrar from './HeadRegistrar';
import ListaRegistrar from './ListaRegistrar';
import './RegistrarAsis.css';
import Navbar from '../cursos/Navbar';



const RegistrarAsis = () => {
  return (
    <> 
    <Navbar/>
    <div className="ree-container">
      <main className="r-main-content">
    <HeadRegistrar/>
    
    <AddSesion/>
    <ListaRegistrar/>
    </main>
    </div>
    </>
  );
};

export default RegistrarAsis;
