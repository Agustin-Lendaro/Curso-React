import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
// import { db } from '../../services/firebase/firebase'
// import { addDoc, collection, getDocs, where, documentId, query, writeBatch} from "firebase/firestore"
import createOrder from "../../services/OrderService"


const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const { cart, total, clearCart } = useContext(CartContext)

  const [clientOrder, setClientOrder] = useState({
    name:"",
    phone:"",
    email:""
  }

  );
  
  const saveData = async () => {
    setLoading(true);
    try {
      const response = await createOrder(clientOrder, cart, total, clearCart);
      if (!response.error) {
        console.log(response.data.id)
      }else{
        console.log(response.error.message)
      }

    } catch (error) {
      console.log(error)
    }

    setLoading(false);
  }

  if(loading) {
      return <h1>Su orden se esta generando...</h1>
  }

  return (
      <>
          <h1>Checkout</h1>
          <div >
            {clientOrder.orderId ? (`Su pedido ha sido registrado. El ID de su compra es ${clientOrder.orderId}`):
            (<div className="d-flex flex-column justify-content-around">
              <h1>  Ingrese sus datos para finalizar la compra  </h1>
              <input type='text' placeholder='Ingrese su nombre' onChange={(e)=> {
                  clientOrder.name = e.target.value;
                  setClientOrder(clientOrder)
                }}/> 
              <input type='email'placeholder='Ingrese su correo electrónico' onChange={(e)=>{
                  clientOrder.email = e.target.value;
                  setClientOrder(clientOrder)
                }}/>
              <input type='tel' placeholder='Ingrese su teléfono'  onChange={(e)=>{
                 clientOrder.phone = e.target.value;
                  setClientOrder(clientOrder)
              }}/>
              <button onClick={saveData}>Enviar pedido</button>
            </div>
          )}
          </div>
           
      </>
  )
}

export default Checkout