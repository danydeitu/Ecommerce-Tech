import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useCarritoContext } from "../../context/CarritoContext";
const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <Link className="nav-link" to={'/cart'}>
                <button className="btn btn-dark">Carrito</button>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link> 
=======
const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <Link className="nav-link" to={'/cart'}><button className="btn btn-dark">Carrito</button></Link> 
            <p>{cantCarrito}</p>
>>>>>>> 46af0d674be9098cd5321e71456156c516bf6eb9
        </>
    );
}

export default CartWidget;