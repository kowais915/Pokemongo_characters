import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import {useEffect, useState} from 'react';

// imporrting components
import Navbar from './components/Navbar';
import About from './components/About';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);

  // using useEffect

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp )=>{
        return resp.json();
      })
      .then((data) => {
       
        setData(data);
      })
  }, []);


  console.log(data);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>


        <div className="grid">
            {data.map((item) =>{
              return <Card key = {item.id} title={item.title} body ={item.body} />
            })}
        </div>



        <Routes>

          <Route path='about' element={<About/>}/>
          
        </Routes>



      </div>

    </BrowserRouter>
  );
}

export default App;
