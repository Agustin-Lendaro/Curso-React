import cart from "./assets/Cart.svg"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"

const CartWidget = () =>{

    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return(
        <Link to="/cart">
            <img src={cart} alt="Carrito"  className= "mx-auto d-block mb-2 float-md-left mr-md-4 img-thumbnail" />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget