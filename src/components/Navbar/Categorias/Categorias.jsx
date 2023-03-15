import { Link } from "react-router-dom";
import React from "react";
const Categorias = React.memo(() => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Categorias</button> 
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/1Notebooks"}>Notebooks</Link></li>
            <li><Link className="dropdown-item" to={"/category/2Pc"}>Pc</Link></li>
            <li><Link className="dropdown-item" to={"/category/3Impresoras"}>Impresoras</Link></li>
            <li><Link className="dropdown-item" to={"/category/4Monitores"}>Monitores</Link></li>
          </ul>
        </li>
    );
})

export default Categorias;
