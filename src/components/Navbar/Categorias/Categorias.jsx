import { BrowserRouter as Router,Route, Link } from "react-router-dom";

const categoryMap = {
  1:'Notebooks',
  2:'PC',
  3:'Impresoras',
  4: 'Monitores',
};
function nombreCategoria ({idCategoria}) {
  return categoryMap[idCategoria] 
};
const Categorias = () => {
nombreCategoria = categoryMap
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Categorias</button> 
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/1Notebooks"}>Notebooks</Link></li>
            <li><Link className="dropdown-item" to={"/category/2PC"}>PC</Link></li>
            <li><Link className="dropdown-item" to={"/category/3Impresoras"}>Impresoras</Link></li>
            <li><Link className="dropdown-item" to={"/category/4Monitores"}>Monitores</Link></li>
          </ul>
        </li>
    );
}

export default Categorias;
