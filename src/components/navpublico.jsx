import React from 'react';
import { Link } from 'react-router-dom';

function Navpublico() {
  return (
    <nav className="navbar fixed-top navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">App</Link>
        <div className="d-flex">
          <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
          <Link to="/registro" className="btn btn-light">Registrarse</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navpublico;
