import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './ListaRegistrar.css';
import HeadRegistrar from './HeadRegistrar';
//import Navbar from '../Cursos/Navbar';


const ListaRegistrar = () => {
  return (
    <>
    <div className='list-container'>
      <table className="students-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Alumno</th>
            <th>Asistencia</th>
          </tr>
        </thead>
        <tbody>
          {/* Los datos de los alumnos se generarían dinámicamente */}
          <tr>
            <td>114455</td>
            <td>Antonio Jairo Santiago Masgo</td>
            <td>
              <input type="checkbox"  defaultChecked="" />Asistio
            </td>
            <td>
              <input type="checkbox" />Faltante
            </td>
            <td>
              <input type="checkbox" />Tardanza
            </td>
          </tr>
          {/* Repetir filas según sea necesario */}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default ListaRegistrar;