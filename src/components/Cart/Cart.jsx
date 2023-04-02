import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const carrito = [
        {
            "id": 6,
            "idCategoria": 2,
            "nombre": "Medidores",
            "marca": "balanza",
            "modelo": "SF-400",
            "precio": 6500,
            "stock": 10,
            "img": "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/balanza.webp?alt=media&token=b67e1340-71fb-4152-91d9-c377939acb07"
        },
        {
            "id": 7,
            "idCategoria": 2,
            "nombre": "Medidores",
            "marca": "Soplete Flame",
            "modelo": "UN 915",
            "precio": 8200,
            "stock": 10,
            "img": "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/soplete.webp?alt=media&token=56295b72-0bea-4152-934d-5289b4ce754c"},
        {
            "id": 8,
            "idCategoria": 2,
            "nombre": "Medidores",
            "marca": "Batidora Cafe ",
            "modelo": "Manual",
            "precio": 1000,
            "stock": 15,
            "img": "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/batcafe.webp?alt=media&token=a9df59f1-e945-4c6f-a432-82cc49a7e87f"},
        {
            "id": 9,
            "idCategoria": 3,
            "nombre": "Tupper",
            "marca": "TupperWare",
            "modelo": "Plastico",
            "precio": 3500,
            "stock": 19,
            "img": "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/tupper.webp?alt=media&token=4ceb02b4-5681-4ab5-b0d9-9e22ba09ec8a"},
       
        
         ]
    return(
        <>
            { carrito.length === 0 
              ? //Si carrito esta vacio
                <>
                    <h2>Carrito vacio</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
                </>
              : //Si carrito tiene productos
                <div className="container cartContainer">
                    {<ItemList products={carrito} plantilla={'itemCart'}/>}
                    <div className="divButtons">
                        <p>Resumen de la compra: precio total</p>
                        <button className="btn btn-danger">Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link> 
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link> 
                    </div>
                </div>
            }
        </>
    )
   
}

/*
    Condicional 1 = 6 complejidad, 2 return y 1 condicional
    if(false) {
        return <p>Es verdadero</p>;
    } 
    return <p>Es falso</p>;
    -----------------
    Condicional 2 = 6 complejidad, 1 return y 2 condicionales
    const condLogica = false
    return(
        <>
        {condLogica && <p>Es verdadero</p>  }
        {!condLogica && <p>Es falso</p>  }
        </>
    )
    ------------
    Condicional 3 = 5 complejidad, 1 return y 1 condicional
    const condLogica = false
    return(
        <>
            {condLogica ? <p>Es verdadero</p> : <p>Es falso</p>}
        </>
    )
*/