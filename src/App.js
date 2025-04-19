import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './Componats/Home/Home';
import BuyWast from './Componats/Buy/buyWast'; 
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
import OrdersPage from './Componats/Orders/order';
import EcoCartPickupForm from './Componats/Pickup/pickupForm';
import ViewPickup from './Componats/Pickup/viewPickup';
import DispatcherHeader from './Componats/Dispatcher/dispatcherHeader';
import DispatcherDashboard from './Componats/Dispatcher/dashboard';
import OrderPageDispatcher from './Componats/Dispatcher/orders';
import ViewPickupDispatcher from './Componats/Dispatcher/Pickups/viewPickup';
import DispatcherBlog from './Componats/Dispatcher/dispatcherBlog';
import AdminDashboard from './Componats/Admin/AdminHome'; 
import CollectedWaste from './Componats/Admin/CollectedWaste';
import AddUserForm from './Componats/Admin/AddUser';
import RecycledWaste from './Componats/Admin/RecycledWaste';
import AddToRecycled from './Componats/Admin/AddRecycled';
import UserRecycledWaste from './Componats/Buy/UserRecycledWaste';
import AdminQuickView from './Componats/Admin/AdminQuickView';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/buy' element={<BuyWast />} />
          <Route path='/buyw' element={<BootstrapCards />} />
          <Route path='/Quickview/:id' element={<QuickView />} />
          <Route path='/addWaste' element={<EcoCartForm />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profileForm' element={<ProfileForm />} />
          <Route path='/shoppingCart' element={<ShoppingCart />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/orders' element={<OrdersPage />} />
          <Route path='/pickupForm' element={<EcoCartPickupForm />} />
          <Route path='/viewPickup' element={<ViewPickup />} />
          <Route path='/userRecycledWaste' element={<UserRecycledWaste/>}/>

          {/* Dispatcher Role */}

          <Route path='/dispatcherHeader' element={<DispatcherHeader />} />
          <Route path='/dispatcherDashboard' element={<DispatcherDashboard />} />
          <Route path='/dispatcherOrder' element={<OrderPageDispatcher />} />
          <Route path='/viewPickupDispatcher' element={<ViewPickupDispatcher />} />
          <Route path='/dispatcherBlog' element={<DispatcherBlog />} />

          {/* Admin Role */}
          <Route path='/adminDashboard' element={<AdminDashboard />} />
          <Route path='/allCollectedWaste' element= {<CollectedWaste/>}/>
          <Route path='/addUser' element={<AddUserForm/>}/>
          <Route path='/recycledWaste' element={<RecycledWaste/>}/>
          <Route path='/addToRecycled/:id' element={<AddToRecycled/>}/>
          <Route path='/adminQuickView/:id' element={<AdminQuickView/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
