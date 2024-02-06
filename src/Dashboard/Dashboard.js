import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Bienvenido </h1>
          <p className="text-center">Si ya es usuario</p>
          <div className="d-flex justify-content-center">
            <Link to="/login" className="btn btn-dark me-2">Iniciar sesión</Link>
            <span className="align-self-center">o</span>
            <Link to="/register" className="btn btn-dark ms-2">Registrarse</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
