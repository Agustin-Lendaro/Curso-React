import { memo } from 'react'
//import { Link } from "react-router-dom"
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
         </div>   
        // <ul style={{display: 'flex', flexDirection: 'column'}}>
        //     { products.map(product => <Link to={`/detail/${product.id}`} key={product.id}>{product.name}</Link>) }
        // </ul>
    )
}

export default memo(ItemList)