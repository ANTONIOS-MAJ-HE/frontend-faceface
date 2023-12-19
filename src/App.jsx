import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registrar from './components/Registrar';
import Perfil from './components/perfil/Perfil';
import Cursos from './components/cursos/Cursos';
import RegistrarAsis from './components/registrarAsistencia/RegistrarAsis';
import PrivateRoute from './PrivateRoute'; // Asegúrate de que esto esté correctamente importado
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registrar' element={<Registrar/>} />
          
          {/* Las siguientes rutas están protegidas y solo accesibles cuando el usuario está autenticado */}
          <Route element={<PrivateRoute />}>
            <Route path='/registrarAsis' element={<RegistrarAsis/>} />
            <Route path='/cursos' element={<Cursos/>} />
            <Route path='/perfil' element={<Perfil/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
