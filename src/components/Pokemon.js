import {useParams } from "react-router-dom";
import {useEffect, useState } from "react";


// styles
import './../styles/Pokemon.css';


const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [sprites, setSprites] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [wieght, setWieght] = useState([]);
    const [types, setTypes ] = useState([]);
    const [height, setHeight] = useState([]);
    const [moves, setMoves] = useState([]);
    const {name} = useParams();



    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((resp )=>{
            return resp.json();
        })
        .then((data) => {
        
       
        setPokemon(data);
        setSprites(data.sprites);
        setAbilities(data.abilities);
        setWieght(data.weight);
        setTypes(data.types);
        setHeight(data.height);
      })
    }, [])

   console.log(abilities)
    return ( 

        <>
        <div className="pokemon">
            
            <div className="image">
                <img src={sprites.front_default}/>
            </div>
            <br></br>

           <div className="name">
                <h2>{name}</h2>
                <br></br>
                <p className = "weight">Weight: {wieght} kg</p>
                <p className = "weight">Height: {height} ft</p>
           </div>

           <br></br>
            
            

        </div>

        <div className="sprites">
            <h2>Sprites</h2>
            <div className="sprites__images">
                {
                    Object.values(sprites).slice(0, 5).map((val) => {
                        return(
                            <img src={val} />
                        )
                    })
                }
            </div>
        </div>

        
        <div className="details">
                

               <div className="abilities">
                    <h2>Abilities</h2>
                    <h3>{abilities.map(item=>{
                        return (
                            <li>{item.ability.name}</li>
                        )
                    })}</h3>
               </div>

               <div className="types">
                    <h2>Types</h2>
                    <h3>
                        {types.map(item=>{
                            return (
                                <li>{item.type.name}</li>
                            )
                        })}
                    </h3>
               </div>
            </div>
        </>
     );
}
 
export default Pokemon;