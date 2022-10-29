import "./Footer.css"
import FacebookLogo from "./assets/facebook.png"
import InstagramLogo from "./assets/instagram.png"

const Footer = () => {

    return(
        <div class="footer">
          <a href="https://www.facebook.com/3D-Nerd-2087391531379772" target="_blank"><img src={FacebookLogo} alt="Logo de Facebook" className="imagenRedSocial" /> </a>
          <a href="https://www.instagram.com/nerd_3d" target="_blank"><img src={InstagramLogo} className="imagenRedSocial" /></a>
        </div>
       
    )
}

export default Footer