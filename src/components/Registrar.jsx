import { useState } from 'react';
import { Link } from 'react-router-dom';

const Registrar = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dni: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí manejarías el envío del formulario
  };

  return (
    <div className="registrar-container">
      <div className="registrar-form">
        <h2 className="form-title">Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-registro">
            <i className="fas fa-user input-icon"></i>
            <input className="span-derecha form-control" type="text" placeholder="Nombres" name="firstName" required />
          </div>
          <div className="form-registro">
            <i className="fas fa-user input-icon"></i>
            <input className="span-derecha form-control" type="text" placeholder="Apellidos" name="lastName" required />
          </div>
          <div className="form-registro">
            <i className="fas fa-envelope input-icon"></i>
            <input className="span-derecha form-control" type="email" placeholder="Email" name="email" required />
          </div>
          <div className="form-registro">
            <i className="fas fa-id-card input-icon"></i>
            <input className="span-derecha form-control" type="text" placeholder="DNI" name="dni" required />
          </div>
          <div className="form-registro">
            <i className="fas fa-lock input-icon"></i>
            <input className="span-derecha form-control" type="password" placeholder="Contraseña" name="password" required />
          </div>
          <div className="form-registro">
            <i className="fas fa-lock input-icon"></i>
            <input className="span-derecha form-control" type="password" placeholder="Confirmar Contraseña" name="confirmPassword" required />
          </div>
          <div className="terms-container">
            <input type="checkbox" id="termsCheckbox" name="acceptTerms" />
            <label htmlFor="termsCheckbox">Términos de uso de la aplicación</label>
          </div>
          <div className="registrar-container2">
          <div className="d-grid gap-2 col-6 mx-auto">
                <Link to="/login"> {/* Agrega este Link */}
                    <button className="btnstar btn btn-primary" type="submit" >Crear Cuenta</button>
                    </Link>
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