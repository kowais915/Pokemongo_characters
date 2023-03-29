import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

// imporrting components
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>



        <Routes>

          <Route path='about' element={<About/>}/>
          
        </Routes>



      </div>

    </BrowserRouter>
  );
}

export default App;
