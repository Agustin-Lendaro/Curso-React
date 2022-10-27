import { db } from "./firebase/firebase"
import { addDoc, collection, getDocs, where, documentId, query, writeBatch} from "firebase/firestore"


const createOrder = async (clientOrder, cart, total, clearCart) => {

    const response = {
        data : '',
        error: ''
    }

    try {
        
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

            const order = {
                buyer : clientOrder,
                items : cart,
                total
            }
            console.log(order);

            const orderRef = collection(db, 'orders')
            let orderId;
            await addDoc(orderRef, order).then(({id}) => orderId = id);

            clearCart()
            response.data = orderId;
        
        } else {
            response.error = 'Hay productos fuera de stock'
        }

        return response;
    } catch (error) {
        response.error = error
        return response
    } 
}

export default createOrder