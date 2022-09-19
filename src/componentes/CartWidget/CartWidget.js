import cart from "./assets/Cart.svg"

const CartWidget = () =>{
    return(
        <div>
            <img src={cart} alt="Carrito"  className= "mx-auto d-block mb-2 float-md-left mr-md-4 img-thumbnail" />
            0
        </div>
    )
}

export default CartWidget