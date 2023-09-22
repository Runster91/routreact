
import { Link } from "react-router-dom"

const Navigation = () => {
    return(
        <div className="contenedor">
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li> <Link to= "/products">Products</Link></li>
                <li> <Link to="/about" >About</Link></li>
                <li><Link to="Register" >Register</Link></li>
            </ul>
        </div>
    )
}

export default Navigation 