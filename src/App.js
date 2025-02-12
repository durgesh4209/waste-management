import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componats/Home/Home';
import BuyWest from './Componats/Buy/Buy'; 


function App() {
  return (
    <>
 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buy' element={<BuyWest />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
