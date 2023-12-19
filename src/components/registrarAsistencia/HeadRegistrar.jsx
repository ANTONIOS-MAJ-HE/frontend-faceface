import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeadRegistrar.css';
import Navbar from '../Cursos/Navbar';

const HeadRegistrar = () => {
  return (
    <>
    <section className="attendance-register">
      <h2>Registrar Asistencia</h2>
      <div className="course-info">
        <div className="field">
          <label>Curso:</label>
          <span>Aplicaciones Móviles Multiplataforma</span>
        </div>
        <div className="field">
          <label>Sección:</label>
          <span>C24B</span>
        </div>
        <div className="field">
          <label>Sist. Eval:</label>
          <span>Aula</span>
        </div>
      </div>
      </section> 
    </>
  );
};

export default HeadRegistrar;