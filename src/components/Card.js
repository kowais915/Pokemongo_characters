import './../styles/Card.css';

const Card = ({title, body}) => {
    return ( 
        
            <div className="card">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        
     );
}
 
export default Card;