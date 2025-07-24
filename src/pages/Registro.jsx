import { Link } from 'react-router-dom';

function Registro() {
    return (
        <div>
            <div className="card" style={{ width: '50rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Iniciar Sesion</h5>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" className="form-label">Direccion</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Avenida falsa" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" className="form-label">Direccion 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento o algo" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" className="form-label">Ciudad</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">Region</label>
                            <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>I Region</option>
                                <option>II Region</option>
                                <option>IIII Region</option>
                                <option>IV Region</option>
                                <option>VI Region</option>
                                <option>VII Region</option>
                                <option>VIII Region</option>
                                <option>IX Region</option>
                                <option>X Region</option>
                                <option>XI Region</option>
                                <option>XII Region</option>
                                <option>XIII Region</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Registro</button>
                        </div>
                        <Link to="/login" className='btn btn-primary'>Iniciar Sesion</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registro