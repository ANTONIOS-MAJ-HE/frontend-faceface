import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registrar = () => {
  const [formData, setFormData] = useState({
    username: '', // Asegúrate de tener este campo en tu formulario si es necesario
    email: '',
    password: '',
    password2: '', // Usaré password2 en lugar de confirmPassword para coincidir con tu backend
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    // Aquí manejarías el envío del formulario
    try {
      const response = await fetch('https://api-face-face.onrender.com/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username, // Asegúrate de que tu API espera este campo
          email: formData.email,
          password: formData.password,
          password2: formData.password2,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registro exitoso', data);
        // Redirigir al usuario al login o donde corresponda
        navigate('/login');
      } else {
        console.error('Error en el registro', data);
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  };

  return (
    <div className="registrar-container">
      <div className="registrar-form">
        <h2 className="form-title">Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-registro">
            <i className="fas fa-user input-icon"></i>
            <input className="span-derecha form-control" type="text" placeholder="Nombres" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="form-registro">
            <i className="fas fa-envelope input-icon"></i>
            <input className="span-derecha form-control" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-registro">
            <i className="fas fa-lock input-icon"></i>
            <input className="span-derecha form-control" type="password" placeholder="Contraseña" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-registro">
            <i className="fas fa-lock input-icon"></i>
            <input className="span-derecha form-control" type="password" placeholder="Contraseña" name="password2" value={formData.password2} onChange={handleChange} required />
          </div>
          <div className="terms-container">
            <input type="checkbox" id="termsCheckbox" name="acceptTerms" />
            <label htmlFor="termsCheckbox">Términos de uso de la aplicación</label>
          </div>
          <div className="registrar-container2">
          <div className="d-grid gap-2 col-6 mx-auto">             
                    <button className="btnstar btn btn-primary" type="submit" >Crear Cuenta</button>             
                </div>
                </div>
          <div className="social-login">
                <button type="button" className="btn btn-google"><i className="fab fa-google"></i> Iniciar sesión con Google</button>
            </div>
        </form>
      </div>
    </div>
  );
};
export default Registrar;
