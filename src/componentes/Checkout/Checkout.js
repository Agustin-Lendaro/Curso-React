import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from '../../services/firebase/firebase'
import { addDoc, collection, getDocs, where, documentId, query, writeBatch} from "firebase/firestore"


const Checkout = () => {
  const [loading, setLoading] = useState(false)

  const { cart, total, clearCart } = useContext(CartContext)

  const createOrder = async () => {
      setLoading(true)
      try {
          const objOrder = {
              buyer: {
                name: "Agustín Lendaro",
                phone: "12431241254123",
                email: "ejemplo@mail.com"
              },
              items: cart,
              total
          }
  
          console.log(objOrder)
  
          const ids = cart.map(prod => prod.id)
          const productsRef = collection(db, 'products')
  
          const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
          const { docs } = productsAddedFromFirestore
  
          const batch = writeBatch(db)
          const outOfStock = []
  
          docs.forEach(doc => {
              const dataDoc = doc.data()
              const stockDb = dataDoc.stock
  
              const productAddedToCart = cart.find(prod => prod.id === doc.id)
              const prodQuantity = productAddedToCart?.quantity
  
              if(stockDb >= prodQuantity) {
                  batch.update(doc.ref, { stock: stockDb - prodQuantity })
              } else {
                  outOfStock.push({ id: doc.id, ...dataDoc})
              }
          })
  
          if(outOfStock.length === 0) {
              await batch.commit()
  
              const orderRef = collection(db, 'orders')
              const orderAdded = await addDoc(orderRef, objOrder)
  
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
          <button onClick={createOrder}>Agregar documento</button>
          
      </>
  )
}

export default Checkout

// const Checkout = () => {

//   const { cart, total } = useContext (CartContext)
 
//   const createOrder = () => {
//     const order = {
//       buyer:{
//         name: "Agustín Lendaro",
//         phone: "12431241254123",
//         email: "ejemplo@mail.com"
//       },
//       items: cart,
//       total
//     }

//     console.log(order);

//     const collectionRef = collection (db, "orders")
//     addDoc(collectionRef, order)

//   }

  

//   return (
//     <>
//     <h1>Checkout</h1>
//     <button onClick={createOrder}>Enviar pedido de compra</button>
//     </>
//   )
// }

// export default Checkout