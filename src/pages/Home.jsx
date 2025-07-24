import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Bienvenido a la App</h1>
      <p className="lead">
        Este es el panel para algo.
      </p>
      <div className="mt-4">
        <Link to="/perfil" className="btn btn-outline-primary me-3">Ir al Perfil</Link>
        <Link to="/dashboard" className="btn btn-outline-success">Ir al Dashboard</Link>
      </div>
    </div>
  );
}

export default Home;
