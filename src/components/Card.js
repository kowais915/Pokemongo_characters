import {Link } from 'react-router-dom';


import './../styles/Card.css';


const Card = ({name, url}) => {
    return ( 
        
            <div className="card">
                <h3>{name}</h3>
                <p>{url}</p>
                <Link  className='url'>View</Link>
               
            </div>
        
     );
}
 
export default Card;