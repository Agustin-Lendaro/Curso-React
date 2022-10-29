import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import Logo from "./assets/3d-nerd-logo.jpg"

const NavBar = () => {
    return(
        <nav>
            <div className="d-flex justify-content-around background">
            <Link to = '/' className="d-flex justify-content-around ">
                <img src={Logo} alt="Logo de la empresa" className="logoEmpresa" />
                <h1>Nerd 3D</h1> 
            </Link>
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