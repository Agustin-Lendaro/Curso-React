import { memo } from 'react'
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="d-flex justify-content-around mx-1">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
         </div>   
       )
}

export default memo(ItemList)