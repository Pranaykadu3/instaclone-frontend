import logoimage from "./images/logoicone.png"
import cameraimg from "./images/camera.png"
import "./Header.css"
import { NavLink } from "react-router-dom"
const Header=()=>{
    return(
        <>
        <div className="navbar">
        <img className="logoimg" src={logoimage} alt="" />
        <h1>Instaclone</h1>
        <NavLink to="/upload"><img className="camera" src={cameraimg} alt="" /></NavLink>
        </div>
        <hr />
        </>
    )
}
export default Header

