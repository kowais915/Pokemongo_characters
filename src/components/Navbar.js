import {BrowserRouter, Routes, Route, NavLink, Link} from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <img  className='logo-img' src='/imgs/logo.png' alt="logo" />
            </div>

            <ul className="nav-links">

                <NavLink to = "/">Home</NavLink> 
                <NavLink  to="/about">About</NavLink>   
                <NavLink>API</NavLink>  
                <NavLink>Code</NavLink>  
            
            </ul>

        </nav>
     );
}
 
export default Navbar;