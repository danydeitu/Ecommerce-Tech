import { Link } from "react-router-dom";

const categoryMap = {
  1:'Notebooks',
  2:'PC',
  3:'Impresoras',
  4: 'Monitores',
};
function CategoryName({categoryId}) {
  return categoryMap[categoryId] 
};
const Categorias = () => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Categorias</button> 
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/1"}>Notebooks</Link></li>
            <li><Link className="dropdown-item" to={"/category/2"}>PC</Link></li>
            <li><Link className="dropdown-item" to={"/category/3"}>Impresoras</Link></li>
            <li><Link className="dropdown-item" to={"/category/4"}>Monitores</Link></li>
          </ul>
        </li>
    );
}

export default Categorias;
