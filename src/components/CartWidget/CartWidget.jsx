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
>>>>>>> 1829a248d1de6090f0989352a6dc4a55923a90a4
        </>
    );
}

export default CartWidget;
