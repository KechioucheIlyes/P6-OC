import "../../style/Footer/Footer.css"
import logoWhite from "../../assets/logo-kasa-white/LOGO-white.png"
export function Footer(){

    return (
        <footer>
            <div className="footer-container">
                <img src={logoWhite} alt="logo-white"></img>
                <p>&copy; 2020 Kasa. All rights reserved</p>
            </div>
            
        </footer>
    )
}