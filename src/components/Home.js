// importing components here
import Card from './Card';

const Home = ({data}) => {


    
    return (  
        
       <>
         <div className="title">
            <h1>Pokémons</h1>
        </div>

        <div className="grid">
                {data.map((item) =>{
                return <Card key = {item.url} name={item.name} url ={item.url} />
                })}  
        </div>
       
       </>

    );
}
 
export default Home;