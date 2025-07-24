import React from 'react';
import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <>
    <div className="container mt-4">
      <h2 className="mb-4">Panel Principal</h2>
      <div className="card">
        <div className="card-body">
          <p className="card-text">Bienvenido al dashboard</p>
          <ul>
            <li>Usuarios registrados</li>
            <li>Consultas recientes</li>
            <li>Reportes disponibles</li>
          </ul>
        </div>
      </div>
      <Link to="/" className="btn btn-outline-primary me-3">Ir al Home</Link>
    </div>
    </>
  );
}

export default Dashboard;
