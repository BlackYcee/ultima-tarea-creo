import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow" style={{ width: '25rem' }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Iniciar Sesión</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="usuario@correo.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="••••••••" />
            </div>
            <div className="d-grid gap-2">
              <Link to="/" className="btn btn-primary">Entrar</Link>
              <Link to="/registro" className="btn btn-outline-primary">Registrarse</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
