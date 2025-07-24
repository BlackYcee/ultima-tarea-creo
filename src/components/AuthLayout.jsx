import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AuthLayout = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark px-4 fixed-top" style={{ zIndex: 1030 }}>
                <Link className="navbar-brand" to="/">Panel</Link>
                <div className="navbar-nav ms-auto flex-row">
                    <Link className="nav-link text-white" to="/Perfil">Perfil</Link>
                    <Link className="nav-link text-white" to="/DashBoard">Dashboard</Link>
                </div>
            </nav>

            <aside
                className="bg-light border-end p-3"
                style={{
                    width: '250px',
                    position: 'fixed',
                    top: '56px',
                    bottom: 0,
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
                        <Link className="nav-link" to="/Perfil">Perfil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/DashBoard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <button className="btn btn-outline-warning ms-3">Cerrar sesión</button>
                        </Link>


                    </li>
                </ul>
            </aside>

            <main
                className="p-4"
                style={{
                    marginLeft: '250px',
                    marginTop: '56px',
                    height: 'calc(100vh - 56px)',
                    overflowY: 'auto'
                }}
            >
                <Outlet />
            </main>
        </>
    );
};
