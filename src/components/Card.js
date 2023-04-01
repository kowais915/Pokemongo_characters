import './../styles/Card.css';
import {Link} from 'react-router-dom';

import {useEffect, useState } from 'react';


const Card = ({name, url, image}) => {
    const [pokeImage, setPokeImage ] = useState([]);
    
    useEffect(() => {
        fetch(`${url}`)
        .then((resp )=>{
            return resp.json();
        })
        .then((data) => {
        
       
            setPokeImage(data.sprites.front_default)
        
      })
    }, [])
    
  
    return ( 
        
            <div className="card">
                <img src={pokeImage} />
                <h2 className= "title">{name}</h2>
                <Link className="red" to={`/pokemon/${name}`}>Read More</Link>
            </div>
        
     );
}
 
export default Card;