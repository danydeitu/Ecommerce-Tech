import { useCarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import React from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"
import { useState } from 'react';

export const Checkout = () => {
    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant //Descuento del stock la cantidad comprada
                updateProducto(prodCarrito.id, prodBDD)
            })
        })

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast.success(`¡Muchas gracias por comprar con nosotros!, su orden de compra con el ID: ${ordenCompra.id
                } por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`)
            emptyCart()
            e.target.reset()
            navigate("/")
        })

    }

    

  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState(null);

  function validarEmail() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setError('Por favor ingrese una dirección de correo electrónico válida.');
    } else if (email !== emailConfirmacion) {
      setError('Los correos electrónicos no coinciden.');
    } else {
      setError(null);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    validarEmail();
    if (!error) {
      // enviar formulario al servidor
    }
  }

 




    return (
        <>
            {carrito.length === 0
                ?
                <>
                    <h2>No posee productos en el carrito</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link>
                </>
                :
                <div className="container" style={{ marginTop: "20px" }}>
                    <form onSubmit={consultarFormulario} ref={datosFormulario}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                            <input type="text" className="form-control" name="nombre" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email"   value={email}
          onChange={(e) => setEmail(e.target.value)} />
                           
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailConfirmacion" className="emailConfirmacion">Repetir Email</label>
                            <input type="email" className="form-control" name="emailConfirmacion" value={emailConfirmacion}
          onChange={(e) => setEmailConfirmacion(e.target.value)}
        />
                      
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Numero telefonico</label>
                            <input type="number" className="form-control" name="celular" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Direccion</label>
                            <input type="text" className="form-control" name="direccion" required />
                        </div>
                        {error && <div>{error}</div>}
                        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                    </form>
                </div>
            }

        </>

    )}
