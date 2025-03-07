import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './Componats/Home/Home';
import BuyWast from './Componats/Buy/buyWast';
import Header from './Componats/Commons/header';
import QuickView from './Componats/Buy/quickView';
import BootstrapCards from './Componats/Buy/demo';
import EcoCartForm from './Componats/Sell/addWaste';
import Blog from './Componats/Blog/blog';
import Contact from './Componats/Contact/contact';
import Profile from './Componats/Profile/profile';
import ProfileForm from './Componats/Profile/editProfile';
import ShoppingCart from './Componats/Commons/shopingCart'; 
import Login from './Componats/Home/loginFom';
import SignUpForm from './Componats/Home/signup';


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/buy' element={<BuyWast />} />
          <Route path='/buyw' element={<BootstrapCards />} />
          <Route path='/Quickview' element={<QuickView />} />
          <Route path='/addWaste' element={<EcoCartForm />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profileForm' element={<ProfileForm />} />
          <Route path='/shoppingCart' element={<ShoppingCart />} />
          <Route path='/' element ={<Login/>}/>
          <Route path ='/signup' element={<SignUpForm/>}/>
        </Routes>
      </BrowserRouter>

    
      {/* <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider> */}
    </>
  );
}

export default App;
