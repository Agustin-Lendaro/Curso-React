// import { Link } from 'react-router-dom'
// import { useContext } from 'react'
// import { Context } from '../../App'

// const Item = ({id, name, img, price}) => {

//     const value = useContext(Context)
//     console.log(value);

//     return (
//         <article className="CardItem">
//             <header className="Header">
//                 <h2 className="ItemHeader">
//                     {name}
//                 </h2>
//             </header>
//             <picture>
//                 <img src={img} alt={name} className="ItemImg"/>
//             </picture>
//             <section>
//                 <p className="Info">
//                     Precio: ${price}
//                 </p>
//             </section>           
//             <footer className='ItemFooter'>
//                 <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
//             </footer>
//         </article>
//     )
// }

// export default Item


//import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock, category}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info"> Nombre: {name}</p>
                <p className="Info"> Precio: ${price}</p>
                <p className="Info"> Categoría: {category}</p>
                <p className="Info"> Cantidad disponible: {stock}</p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item