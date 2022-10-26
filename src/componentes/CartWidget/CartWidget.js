import cart from "./assets/Cart.svg"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () =>{

    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return(
        <div>
            <img src={cart} alt="Carrito"  className= "mx-auto d-block mb-2 float-md-left mr-md-4 img-thumbnail" />
            {totalQuantity}
        </div>
    )
}

export default CartWidget