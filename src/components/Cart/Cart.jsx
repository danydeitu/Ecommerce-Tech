<<<<<<< HEAD
import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"
export const Cart = () => {
    const {carrito, totalPrice, emptyCart } = useCarritoContext()
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
                        <p>Resumen de la compra: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button>
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

=======
import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
export const Cart = () => {
  const carrito = [

    {id: 1,
        idCategoria: 1,
        nombre: "Notebook",
        marca: "Exo",
        modelo: "Smart L33E",
        precio: 80000,
        stock: 10,
        img: "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/exo.webp?alt=media&token=66735d0b-ba89-4d55-b865-91d53e601824"
    },
    {
    id: 2,
        idCategoria: 1,
        nombre: "Notebook",
        marca: "Lenovo",
        modelo: "N5030",
        precio: 85000,
        stock: 20,
        img: 'https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/hp.webp?alt=media&token=e143d3f0-9515-42e4-b9f8-0d2d81e476e9'
    },
    {
        id: 3,
        idCategoria: 1,
        nombre: "Notebook",
        marca: "Novatech",
        modelo: "50D1U",
        precio: 57000,
        stock: 15,
        img: "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/hp1.webp?alt=media&token=2c3e4c38-fc7d-4549-ad7f-9954108d9fd7"
    },
    {
        id: 4,
        idCategoria: 1,
        nombre: "Notebook",
        marca: "Asus",
        modelo: "X515EA",
        precio: 232000,
        stock: 30,
        img: "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/Asus.webp?alt=media&token=01c1be9b-4996-48f2-8252-85b5767d3fab"
    },
    {
        id: 5,
        idCategoria: 2,
        nombre: "PC",
        marca: "AMD",
        modelo: "Rysen 7 4750g",
        precio: 230000,
        stock: 7,
        img: "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/pc-amd.webp?alt=media&token=741c7c0a-2035-4848-a6b4-e3a56e0f0b1c"
    },
    {
        id: 6,
        idCategoria: 2,
        nombre: "PC",
        marca: "Over Tech",
        modelo: "Pulse",
        precio: 75500,
        stock: 10,
        img: "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/pc-over.webp?alt=media&token=1f0bb590-058e-4147-b986-6a8d3034b1a8"
    },
    {
        id: 7,
        idCategoria: 2,
        nombre: "PC",
        marca: "Intel",
        modelo: "I7 8700",
        precio: 220000,
        stock: 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/pc-intel1.webp?alt=media&token=5cbb36d9-ab1a-4fe3-9f03-56c50982f349"
    },
    {
        id: 8,
        idCategoria: 2,
        nombre: "PC",
        marca: "Intel ",
        modelo: "I5 10400",
        precio: 150000,
        stock: 9,
        img: "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/pc-intel.webp?alt=media&token=cd3fb688-1933-4e41-9f3b-a5c4bb08b111"
    },
    {
        id: 9,
        idCategoria: 3,
        nombre: "Impresora Multifuncion",
        marca: "Canon",
    modelo: "G2160 Tinta Continua",
        precio: 68000,
        stock: 11,
        img: "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/impre-canon.webp?alt=media&token=f7b20253-8762-49bd-b522-f9d0f9b945d9"
    },
    {
        id: 10,
        idCategoria: 3,
        nombre: "Impresora Multifuncion",
        marca: "HP",
        modelo: "Ink Tanck Wirless 415",
        precio: 55200,
        stock: 25,
        img: "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/impre-hp.webp?alt=media&token=6cddc790-da12-4683-84f2-1b8bae8079ce"
    },
    {
        id: 11,
        idCategoria: 4,
        nombre: "Monitor",
        marca: "Samsung",
        modelo: "F27T350FHL led 27 led 27",
        precio: 85000,
        stock: 6,
        img: "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/monitor-samsung.webp?alt=media&token=ad605dba-8955-431a-b3c7-d339bf908562"
    },
    {
        id: 12,
    idCategoria: 4,
        nombre: "Monitor",
        marca: "Philips",
    modelo: "Philips 27 Curvo 271e1sca",
        precio: 120000,
        stock: 20,
        img: "https://firebasestorage.googleapis.com/v0/b/dany-tech-c1ab3.appspot.com/o/monitor-philips.webp?alt=media&token=0c06af8c-bcb1-47c2-9921-d836e5079082"
    }

  ];
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
                    <button className="btn btn-danger" >Vaciar carrito</button>
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
>>>>>>> 46af0d674be9098cd5321e71456156c516bf6eb9
*/