import "./ItemDetail.css"
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCounter from '../ItemCounter/ItemCounter'
import { CartContext } from '../../context/CartContext.js'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
    }

    return (
        <article className="d-flex flex-column mx-auto justify-content-md-center">
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="img-thumbnail img-fluid CardImg" />
            </picture>
            <section>
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: {price}</p>
            </section>           
            <footer>
                {
                    quantityToAdd === 0 ? (
                        <ItemCounter onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail