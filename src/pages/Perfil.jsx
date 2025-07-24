import React from 'react';
import { Link } from 'react-router-dom';
function Perfil() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Tu Perfil</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Nicolás</h5>
          <p className="card-text">Correo: usuario@example.com</p>
          <p className="card-text">Rol: </p>
          <button className="btn btn-outline-primary">Editar perfil</button>
        </div>
      </div>
      <Link to="/" className="btn btn-outline-primary me-3">Ir al Home</Link>
    </div>
  );
}

export default Perfil;
