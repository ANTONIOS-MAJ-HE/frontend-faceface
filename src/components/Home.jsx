import { Link } from 'react-router-dom';
import homeImage from '../assets/imagenes/home3.jpeg';

const Home = () => {
  return (
    <body className='home-body'>
    <div className="home-container">
      <img className='home-img' src={homeImage} alt="Facial Recognition" />
      <h1 className="home-h1" >Reconocimiento Facial</h1>
      <p className="home-p">¡Bienvenido al futuro! Inicia sesión para experimentar la revolución del reconocimiento facial.</p>
      <Link to="/login"> {/* Agrega este Link */}
        <button className="home-btn">Login</button>
      </Link>
      <Link to="/registrar"> {/* Agrega este Link */}
        <button className="home-btn">Registrar</button>
      </Link>
    </div>
    </body>
  );
};

export default Home;
