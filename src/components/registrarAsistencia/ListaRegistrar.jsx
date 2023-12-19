import React, { useState, useEffect } from 'react';
import './ListaRegistrar.css';

const ListaRegistrar = () => {
  const [alumnos, setAlumnos] = useState([]); // Estado para almacenar la lista de alumnos

  useEffect(() => {
    // Función para cargar los alumnos desde la API
    const cargarAlumnos = async () => {
      try {
        const respuesta = await fetch('https://api-face-face.onrender.com/alumno/');
        if (!respuesta.ok) {
          throw new Error('No se pudo obtener la lista de alumnos');
        }
        const alumnos = await respuesta.json();
        setAlumnos(alumnos); // Actualizar el estado con la lista de alumnos
      } catch (error) {
        console.error(error);
      }
    };

    cargarAlumnos(); // Llamar a la función al montar el componente
  }, []); // El array vacío asegura que el efecto se ejecute una sola vez

  return (
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
          {alumnos.map((alumno) => (
            <tr key={alumno.codigo}>
              <td>{alumno.codigo}</td>
              <td>{alumno.nombre}</td>
              <td>
                <input type="checkbox" name="asistio" /> Asistio
              </td>
              <td>
                <input type="checkbox" name="faltante" /> Faltante
              </td>
              <td>
                <input type="checkbox" name="tardanza" /> Tardanza
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaRegistrar;
