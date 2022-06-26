import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';


function App() {
  return (
    <>
     <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
      
    </>
  );
}

export default App;
