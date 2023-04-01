import {useParams } from "react-router-dom";

const Pokemon = () => {

    const {name} = useParams();

    return ( 
        <div className="pokemon">
            <h1>{name}</h1>
        </div>
     );
}
 
export default Pokemon;