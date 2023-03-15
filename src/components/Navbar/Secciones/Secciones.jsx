import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import React from "react";
const Secciones = React.memo(() => {
=======
const Secciones = React.memo( () => {
>>>>>>> 46af0d674be9098cd5321e71456156c516bf6eb9
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={"/"} ><button className="btn btn-dark">Inicio</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/contacto"}><button className="btn btn-dark">Contacto</button></Link>
            </li>
        </>
    );
})

export default Secciones;
