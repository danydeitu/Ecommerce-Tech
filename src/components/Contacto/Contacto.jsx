import React from 'react'
import { useNavigate } from "react-router-dom"

export const Contacto = () => {
    const datosFormulario = React.useRef()//referencia
    let navigate =useNavigate() //ubicacion actual
    const consultarFormulario = (e) => {
e.preventDefault()
console.log(datosFormulario.current); //consulta estado acual formulario
const datForm = new FormData(datosFormulario.current)//genera objeto iterador de estos datos
const contacto = Object.fromEntries(datForm)// transforma un obj literal
console.log(contacto)
e.target.reset();//resetea el formulario
navigate("/") //redi a home

    }
  return (
    <div className="container" style={{marginTop:"30px" ,padding:"10px" ,width:"50%"}}>
    <form onSubmit={consultarFormulario} ref={datosFormulario}>
    <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
        <input type="text" className="form-control" name="nombre"/>
    </div>
    <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" name="email" />
    </div>
    <div className="mb-3">
        <label htmlFor="celular" className="form-label">Numero telefonico</label>
        <input type="number" className="form-control" name="celular" />
    </div>
    <div className="mb-3">
        <label htmlFor="consulta" className="form-label">Consulta</label>
        <textarea className="form-control" name="consulta" rows={3} defaultValue={""} />
    </div>

    <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
</div>
  )
}
