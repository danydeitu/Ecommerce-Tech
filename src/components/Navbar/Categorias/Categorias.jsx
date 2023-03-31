import React from "react"
import { Link } from "react-router-dom";

const categoryMap = {
  1:'Utensilios',
  2:'Medidores',
  3:'Tupper',
  4: 'Set de Mate',
};
function nombreCategoria ({idCategoria}) {
  return categoryMap[idCategoria] 
};
const Categorias = React.memo( () => {
nombreCategoria = categoryMap
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Categorias</button> 
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/1Utensilios"}>Utensilios</Link></li>
            <li><Link className="dropdown-item" to={"/category/2Medidores"}>Medidores</Link></li>
            <li><Link className="dropdown-item" to={"/category/3Tupper"}>Tupper</Link></li>
            <li><Link className="dropdown-item" to={"/category/4Set de Mate"}>Set de Mate</Link></li>
          </ul>
        </li>
    );
})

export default Categorias;
