import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from '../../services/firebase/firebase'
import { addDoc, collection, getDocs, where, documentId, query, writeBatch} from "firebase/firestore"
//import OrderForm from "../OrderForm/OrderForm"


const Checkout = () => {
  const [loading, setLoading] = useState(false)

  const [name, setName]= useState();
  const [email, setEmail]= useState();
  const [phone,setPhone] = useState();
  const [orderId,setOrderId] = useState();
  
  const { cart, total, clearCart } = useContext(CartContext)

  const createOrder = async () => {
      setLoading(true)
      try {
          const clientOrder = {
              buyer: {name, email, phone},
              items: cart,
              total
          }
  
          console.log(clientOrder)
  
          const ids = cart.map(prod => prod.id)
          const productsRef = collection(db, 'products')
  
          const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
          const { docs } = productsAddedFromFirestore
  
          const batch = writeBatch(db)
          const outOfStock = []
  
          docs.forEach(doc => {
              const documentData = doc.data()
              const databaseStock = documentData.stock
  
              const productAddedToCart = cart.find(prod => prod.id === doc.id)
              const prodQuantity = productAddedToCart?.quantity
  
              if(databaseStock >= prodQuantity) {
                  batch.update(doc.ref, { stock: databaseStock - prodQuantity })
              } else {
                  outOfStock.push({ id: doc.id, ...documentData})
              }
          })
  
          if(outOfStock.length === 0) {
              await batch.commit()
  
              const orderRef = collection(db, 'orders')
              const orderAdded = await addDoc(orderRef, clientOrder).then(({id}) => setOrderId(id));
                
              console.log(`El id de su orden es: ${orderAdded.id}`)

              clearCart()
          } else {
              console.log('Hay productos fuera de stock')
          }
      } catch (error) {
          console.log(error)
      } finally {
          setLoading(false)
      }
  }

  if(loading) {
      return <h1>Su orden se esta generando...</h1>
  }

  return (
      <>
          <h1>Checkout</h1>
          <div className='checkoutcontainer'>
            {orderId ? (`Su pedido ha sido registrado. El ID de su compra es ${orderId}`):
            (<div>
              <h1>  Finish your Order  </h1>
              <input type='text' placeholder='Ingrese su nombre' onChange={(e)=>setName(e.target.value)} /> <br/>
              <input type='email'placeholder='Ingrese su correo electrónico' onChange={(e)=>setEmail(e.target.value)}/><br/>
              <input type='tel' placeholder='Ingrese su teléfono'  onChange={(e)=>setPhone(e.target.value)}/><br/>
              <button onClick={createOrder}>Send</button>
            </div>
          )}
          </div>
           
      </>
  )
}

export default Checkout