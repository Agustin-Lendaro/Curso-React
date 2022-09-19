import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <div className="d-flex justify-content-around">
                <h1>Nerd 3d</h1>
                <div>
                    <CartWidget />
                 </div>
            </div>
            
            <div className="d-flex justify-content-around">
                <button>Llaveros</button>
                <button>Muñecos</button>
                <button>Otros</button>
            </div>
            
        </nav>
    )
}

export default NavBar