import React, { useState, useEffect } from 'react';
import './Cursos.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const obtenerCursos = async () => {
      try {
        const respuesta = await fetch('https://api-face-face.onrender.com/cursos/');
        if (!respuesta.ok) {
          throw new Error('Error al obtener respuesta de la API');
        }
        const cursos = await respuesta.json();
        setCursos(cursos); // Asume que la respuesta de la API es un arreglo de cursos
      } catch (error) {
        console.error('Error al obtener cursos:', error);
      }
    };

    obtenerCursos();
  }, []);

  return (
    <>
      <Navbar />
      <div className="cards-container">
        {cursos.map((curso, index) => (
          <div key={index} className='card'>
            <img className='card-image' src={curso.imagen} alt={`Imagen de ${curso.nombre}`} />
            <div className="card-info">
              <h4>{curso.nombre}</h4>
              <p>{`Docente: ${curso.docente.nombres} ${curso.docente.apellidos}`} {/* Aquí deberías reemplazar curso.docente con el nombre del docente si está disponible */}</p>
              <p>{curso.ciclo}</p>
            </div>
            <Link to="/registrarAsis" className="btn btn-register">Registrar Asistencia</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cursos;
