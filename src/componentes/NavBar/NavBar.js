import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav>
            <div className="d-flex justify-content-around">
            <Link to = '/'><h1>Nerd 3d</h1> </Link>
                <div>
                    <CartWidget />
                 </div>
            </div>
            
            <div className="d-flex justify-content-around">
                <Link to='/category/llavero' className="Option">Llaveros</Link>
                <Link to='/category/muñeco' className="Option">Muñecos</Link>
                <Link to='/category/otros' className="Option">Otros</Link>
            </div>
            
        </nav>
    )
}

export default NavBar