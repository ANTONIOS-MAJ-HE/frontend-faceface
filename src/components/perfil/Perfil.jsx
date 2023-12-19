import React from 'react';
import './Perfil.css';
import Navbar from '../Cursos/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';

const Perfil = () => {

  // Estado para almacenar los datos del usuario
  const [perfil, setPerfil] = useState({
    nombres: '',
    apellidos: '',
    dni: '',
    user: {
      username: '',
    },
  });

  useEffect(() => {
    // Función para obtener los datos del perfil del usuario
    const fetchPerfil = async () => {
      try {
        // Reemplaza con la URL de tu API
        const respuesta = await fetch('https://api-face-face.onrender.com/docentes/');
        const datos = await respuesta.json();
        // Asumiendo que la API devuelve un array y tomamos el primer elemento
        setPerfil(datos[0]);
      } catch (error) {
        console.error('Error al obtener datos del perfil:', error);
      }
    };

    fetchPerfil();
  }, []);

  return (
    <>
      <Navbar/>
      <div className="App-p">
        <main className="Profile-section">
          <div className="Profile-card">
            <div className="Profile-image">
              <img className='perfil-img'  />
            </div>
            <div className="Personal-info">
            <h2>Información Personal</h2>
              <p><strong>Nombre:</strong> {perfil.nombres} {perfil.apellidos}</p>
              <p><strong>Usuario:</strong> {perfil.user.username}</p>
              <p><strong>DNI:</strong> {perfil.dni}</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Perfil;
