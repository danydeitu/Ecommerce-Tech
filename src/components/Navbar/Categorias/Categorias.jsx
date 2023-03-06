<<<<<<< HEAD
import { Link } from "react-router-dom";
import React from "react";
const Categorias = React.memo(() => {
=======
import React from "react"
import { Link } from "react-router-dom";

const categoryMap = {
  1:'Notebooks',
  2:'PC',
  3:'Impresoras',
  4: 'Monitores',
};
function nombreCategoria ({idCategoria}) {
  return categoryMap[idCategoria] 
};
const Categorias = React.memo( () => {
nombreCategoria = categoryMap
>>>>>>> 46af0d674be9098cd5321e71456156c516bf6eb9
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
