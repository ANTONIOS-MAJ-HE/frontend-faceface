import React from 'react';
import './Perfil.css';
import Navbar from '../Cursos/Navbar';

const Perfil = () => {
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
              <p><strong>Nombre:</strong> Antonio Jairo Santiago Masgo</p>
              <p><strong>Carrera:</strong> Diseño y Desarrollo de Software</p>
              <p><strong>Ciclo:</strong> Regular 5 Ciclo</p>
              <p><strong>Código:</strong> 114455</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Perfil;
