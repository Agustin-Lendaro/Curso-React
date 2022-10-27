import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock, category}) => {
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="img-fluid"/>
            </picture>
            <section>
                <p className="Info"> Nombre: {name}</p>
                <p className="Info"> Precio: ${price}</p>
                <p className="Info"> Categoría: {category}</p>
                <p className="Info"> Cantidad disponible: {stock}</p>
            </section>           
            <footer>
                <Link to={`/detail/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item