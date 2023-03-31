import './../styles/Card.css';

const Card = ({name, url}) => {
    return ( 
        
            <div className="card">
                <h3>{name}</h3>
                <p>{url}</p>
            </div>
        
     );
}
 
export default Card;