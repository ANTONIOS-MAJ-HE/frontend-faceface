import React, { useState } from 'react';
import './Cursos.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Cursos = () => {
  const [cards, setCards] = useState([
    {
      imagen: "https://blog.cobistopaz.com/hubfs/Imported_Blog_Media/cluod.png",
      text: 'Desarrollo de Soluciones en la nube',
      text2: 'C24 - 5 - B'
    },
    {
      imagen: "https://frontdeskhelpers.com/wp-content/uploads/2020/04/cross-platform-banner.png",
      text: 'Aplicaciones Moviles Multiplataforma',
      text2: 'C24 - 5 - B'
    },
    {
      imagen: "https://www.goodworklabs.com/wp-content/uploads/2017/08/Mean.jpg",
      text: 'Desarrollo de Aplicaciones Web Avanzado',
      text2: 'C24 - 5 - B'
    },
    {
      imagen: "https://www.goodworklabs.com/wp-content/uploads/2017/08/Mean.jpg",
      text: 'Diseño de Proyectos de Innovacion',
      text2: 'C24 - 5 - B'
    },
    {
      imagen: "https://decidesoluciones.es/wp-content/uploads/2020/05/BPMLC_reduced_1-3.png",
      text: 'Integracion de Sistemas Empresariales',
      text2: 'C24 - 5 - B'
    },
    {
      imagen: "https://blog.cobistopaz.com/hubfs/Imported_Blog_Media/cluod.png",
      text: 'Programacion en moviles Avanzado',
      text2: 'C24 - 5 - B'
    }
  ]);

  return (
    <>
    <Navbar/>
            <div className="cards-container">
                {cards.map((card, index) => (
                    <div key={index} className='card'>
                        <img className='card-image' src={card.imagen} alt={`Imagen de ${card.text}`} />
                        <div className="card-info">
                            <h4>{card.text}</h4>
                            <p>{card.text2}</p>
                        </div>
                        <Link to="/registrarAsis" className="btn btn-register">Registrar Asistencia</Link>
                    </div>
                ))}
            </div>
    </>
  );
};

export default Cursos;
