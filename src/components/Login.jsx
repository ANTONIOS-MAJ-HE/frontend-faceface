import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Esta es la importación correcta para react-router-dom v6
import { Link } from 'react-router-dom';
import slide1 from '../assets/imagenes/mujer.jpg';
import slide2 from '../assets/imagenes/slide2.png';
//import './Login.css';

const Login = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      // Lógica para enviar solicitud al backend
      try {
        const response = await fetch('http://localhost:8000/api/token/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: username, password }),
        });
  
        if (!response.ok) {
            throw new Error('Error en la autenticación');
        }

        const data = await response.json();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);

        // Redireccionar al usuario después del inicio de sesión
        navigate('/cursos'); // Esto es correcto para react-router-dom v6
    } catch (error) {
        console.error('Error:', error);
    }
};

  return (
    <body className='login-body'>
    <div className="container">
        <div className="brand-section">
            <div id="imageCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} alt="Slide 2" />
                    </div>
                    {/* Add more images as needed */}
                </div>
            </div>
            <br />
            <div className="intro-text">
                <h4>¡Bienvenido a IdealRoom!</h4>
                <p>Tu solución para una búsqueda de alojamiento estudiantil más fácil y conveniente. Encuentra tu lugar ideal cerca de Tecsup de manera rápida y eficiente con nuestra aplicación. ¡Comienza a explorar ahora y simplifica la búsqueda de alojamiento estudiantil!</p>
            </div>
        </div>
        <div className="login-container">
            <h1 className="text-center">Inicio de Sesión</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <div className="form-registro">
                        <i className="fas fa-envelope fa-lg"></i>
                        <input  className="span-derecha form-control" id="email" aria-describedby="emailHelp" placeholder="Correo Electrónico" value={username}
            onChange={(e) => setUserName(e.target.value)} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-registro btn-password">
                        <i className="fas fa-lock fa-lg"></i>
                        <input className="span-derecha form-control" name="password" title="Ingrese su contraseña" type="password" id="password" formControlName="password" placeholder="Contraseña" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btnstar btn btn-primary" type="submit" >Iniciar Sesión</button>                   
                </div>
                <div className="create-account">
                
                    <p>¿Aún no tienes una cuenta? <Link to="/registrar"> {/* Agrega este Link */} <a href="#">Regístrate aquí</a></Link></p>
                
                </div>
            </form>
            <div className="social-login">
                <button type="button" className="btn btn-google"><i className="fab fa-google"></i> Iniciar sesión con Google</button>
            </div>
        </div>
    </div>
    </body>
  );
};

export default Login;
