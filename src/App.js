import React from 'react';
import './index.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Auth from "./Pages/Auth";
import DashBoard from './Pages/DashBoard';
import Account from './Pages/Account';
import NotFound from './Pages/NotFound';
import { UserContextProvider } from './Context/UserContext';

function App() {
  return (
    <div className="App bg-pink-200">
      <UserContextProvider>
      <Auth />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
          <Route path='/account' element={<Account />} />
          <Route path='*' element={<NotFound />} />
     
      </Routes>
      </UserContextProvider>
     
    </div>
  );
}

export default App;
