import './../styles/Card.css';
import {Link} from 'react-router-dom';


const Card = ({name, url}) => {
    return ( 
        
            <div className="card">
                <h2 className= "title">{name}</h2>
                <Link className="red" to={`/pokemon/${name}`}>Read More</Link>
            </div>
        
     );
}
 
export default Card;