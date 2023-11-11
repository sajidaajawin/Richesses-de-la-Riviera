import React from 'react';
import Home from './Home';
import Details from './Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from './AllProducts';
import Contact from './ContactUs';
import Categories from './Categories';
import LoginForm from './Login';
import RegisterForm from './Regestier';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/AllProducts" element={<AllProducts/>} />
        <Route path='/ContactUs' element={<Contact/>} />
        <Route path='/Categories' element={<Categories/>} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/Register' element={<RegisterForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
