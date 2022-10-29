import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../../services/firebase/firebase'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

                            //ternario para ver si hay filtro, traer eso , si no hay, traer todo
        const collectionRef = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products")

        getDocs(collectionRef).then(response => {
        
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })

            setProducts(productsAdapted)
        })
        
        .finally (() => {
            setLoading(false)
        })
    }, [categoryId])
    
    if(loading) {
        return <h1>Cargando...</h1>
    }
    
    

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer