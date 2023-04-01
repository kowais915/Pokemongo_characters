import {BrowserRouter, Routes, Route, NavLink, Link} from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <Link to="/"><img  className='logo-img' src='/imgs/logo.png' alt="logo" /></Link>
            </div>

            <ul className="nav-links">

                <NavLink to = "/">Home</NavLink> 
                <NavLink  to="/about">About</NavLink>    
                <NavLink to ="https://github.com/kowais915/Pokemongo_characters">Code</NavLink>  
            
            </ul>

        </nav>
     );
}
 
export default Navbar;