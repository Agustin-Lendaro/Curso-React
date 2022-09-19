import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <div>
                <h1>Nerd 3d</h1>        
            </div>
            <div className="d-flex justify-content-around">
                <button>Llaveros</button>
                <button>Muñecos</button>
                <button>Otros</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar