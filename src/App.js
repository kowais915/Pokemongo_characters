import { BrowserRouter, NavLink, Routes, Route, Switch  } from 'react-router-dom';
import {useEffect, useState} from 'react';

// imporrting components
import Navbar from './components/Navbar';
import About from './components/About';
import Card from './components/Card';
import Home from './components/Home';

function App() {
  const [data, setData] = useState([]);

  // using useEffect

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((resp )=>{
        return resp.json();
      })
      .then((data) => {
        
        console.log(data);
        setData(data.results);
      })
  }, []);


  console.log(data);
  return (


    <BrowserRouter>
      <div className="App">
        <Navbar/>


     

        

        <Routes>

          <Route path='about' element={<About/>}/>

          <Route path = '/' element={<Home data = {data}/>}/>
          
        </Routes>





      </div>

    </BrowserRouter>
  );
}

export default App;
