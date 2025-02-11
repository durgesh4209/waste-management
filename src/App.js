import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from './Components/signup';
import HomePage from './Components/HomePage';
import SignIn from './Components/signin';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="signup" element={<SignupForm />}></Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='signup' element={<SignupForm />} />
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
