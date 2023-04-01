import {useParams } from "react-router-dom";
import {useEffect, useState } from "react";


// styles
import './../styles/Pokemon.css';


const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [sprites, setSprites] = useState([]);
    const {name} = useParams();



    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((resp )=>{
            return resp.json();
        })
        .then((data) => {
        
       
        setPokemon(data);
        setSprites(data.sprites);
      })
    }, [])

   
    return ( 
        <div className="pokemon">
            
            <div className="image">
                <img src={sprites.front_default}/>
            </div>
            <br></br>

           <div className="name">
                <h2>{name}</h2>
           </div>


        </div>
     );
}
 
export default Pokemon;