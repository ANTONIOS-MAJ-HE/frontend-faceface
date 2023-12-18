// src/App.jsx
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registrar from './components/Registrar';
import Perfil from './components/perfil/Perfil';
import Cursos from './components/Cursos/Cursos';
import RegistrarAsis from './components/registrarAsistencia/RegistrarAsis';
import './App.css'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registrarAsis' element={<RegistrarAsis/>} />
          <Route path='/registrar' element={<Registrar/>} />
          <Route path='/cursos' element={<Cursos/>} />
          <Route path='/perfil' element={<Perfil/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
