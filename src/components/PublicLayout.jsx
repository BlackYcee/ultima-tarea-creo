// PublicLayout.jsx
import { Outlet } from 'react-router-dom';
import Navpublico from './navpublico';
import { Link } from 'react-router-dom';

export const PublicLayout = () => {
  return (
    <>
      <Navpublico />

      <div className="d-flex" style={{ marginTop: '56px', minHeight: 'calc(100vh - 96px)' }}>
        <aside
          className="bg-light border-end p-3 d-none d-md-block"
          style={{
            width: '220px',
            position: 'fixed',
            top: '56px',
            bottom: '40px',
            left: 0,
            overflowY: 'auto',
            zIndex: 1020
          }}
        >
          <h5>Menú</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registro">Registro</Link>
            </li>
          </ul>
        </aside>

        <main
          className="flex-grow-1 p-4"
          style={{
            marginLeft: '220px',
            marginBottom: '40px',
            width: '100%',
            overflowY: 'auto'
          }}
        >
          <Outlet />
        </main>
      </div>

      <footer
        className="bg-primary text-white text-center py-2"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '40px',
          zIndex: 1030
        }}
      >
        <small>© 2025 Nicolás | Todos los derechos reservados</small>
      </footer>
    </>
  );
};
