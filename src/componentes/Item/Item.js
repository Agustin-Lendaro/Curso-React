import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({id, name, img, price, stock, category}) => {
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="img-fluid CardImg"/>
            </picture>
            <section>
                <p> Nombre: {name}</p>
                <p> Precio: ${price}</p>
                <p> Categoría: {category}</p>
                <p> Cantidad disponible: {stock}</p>
            </section>           
            <footer>
                <Link to={`/detail/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item