import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Bienvenido Usuario</h1>
      <p>Si ya es usuario</p>
      <li className="nav-item">
        <Link className="nav-link" to="/login"><button className="btn btn-dark">Inicia sesión</button></Link>
      </li>
      <p>O si aún no lo es</p>
      <li className="nav-item">
        <Link className="nav-link" to="/register"><button className="btn btn-dark">Registrarse</button></Link>
      </li>
    </div>
  );
}

export default Dashboard;
