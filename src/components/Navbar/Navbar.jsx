import React from 'react'

const  Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>barra de navegación</font></font></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Navegación de palanca">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Casa
                </font></font><span className="visually-hidden"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>(Actual)</font></font></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Características</font></font></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Precios</font></font></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Acerca de</font></font></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Desplegable</font></font></a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Acción</font></font></a>
              <a className="dropdown-item" href="#"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Otra acción</font></font></a>
              <a className="dropdown-item" href="#"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>algo mas aqui</font></font></a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Enlace separado</font></font></a>
            </div>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-sm-2" type="search" placeholder="Buscar" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Buscar</font></font></button>
        </form>
      </div>
    </div>
    
  </nav>

  )
}
export default Navbar;
