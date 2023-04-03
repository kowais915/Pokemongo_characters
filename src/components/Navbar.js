import {BrowserRouter, Routes, Route, NavLink, Link} from 'react-router-dom';
import '../styles/Navbar.css'
import { useDark } from '../hooks/useDark';
import { useState } from 'react';

const Navbar = () => {
    const [dark, setDark ] = useState(false);

    const { color, changeColor, changeBg} = useDark();

    
    return ( 

        <nav className="navbar" style={{background: color}} >
            <div className="logo">
                <Link to="/"><img  className='logo-img' src='/imgs/logo.png' alt="logo" /></Link>
            </div>

            <ul className="nav-links">

                <NavLink to = "/">Home</NavLink> 
                <NavLink  to="/about">About</NavLink>    
                <NavLink to ="https://github.com/kowais915/Pokemongo_characters">Code</NavLink> 
                <button onClick={()=>{
                    if (dark){
                        setDark(false);
                        changeColor('red')
                        changeBg('white')
                    }else{
                        setDark(true);
                        changeColor('black')
                        changeBg('black')
                    }
                }}>{dark ? "Light" : "Dark"}</button> 
            
            </ul>

        </nav>
     );
}
 
export default Navbar;