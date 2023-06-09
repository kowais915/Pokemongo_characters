import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { useDark } from './hooks/useDark';

// imporrting components
import Navbar from './components/Navbar';
import About from './components/About';
import Card from './components/Card';
import Home from './components/Home';
import Pokemon from './components/Pokemon';



function App() {
  const [data, setData] = useState([]);
  const { color, background, changeColor, changeBg} = useDark();

  // using useEffect

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((resp )=>{
        return resp.json();
      })
      .then((data) => {
        
        
        setData(data.results);
      })
  }, []);


  return (
    <BrowserRouter>
      <div className="App" style={{background: background}}>
        <Navbar/>


          <Routes>

                <Route exact path="/"  element={<Home data={data}/>}/>

                <Route path="/about" element={<About/>}/>

                <Route path="/pokemon/:name" element={<Pokemon/>}/>
                
                
          </Routes>
            

            


      
          
       





      </div>

    </BrowserRouter>
  );
}

export default App;
