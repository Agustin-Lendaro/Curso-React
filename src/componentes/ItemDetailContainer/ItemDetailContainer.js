import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {getDoc, doc} from "firebase/firestore"
import { db } from '../../services/firebase/firebase'

const ItemDetailContainer = ({setCart}) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        
        const docRef = doc(db, "products", productId)

        getDoc(docRef).then(doc=>{
            const data = doc.data()

            const productAdapted = {id: doc.id, ...data}
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error);
        }).finally (() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
         <div>
        <ItemDetail{...product} setCart = {setCart} />
        </div>
    )
}

export default ItemDetailContainer