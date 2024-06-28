import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './About';
import Navbar from './Navbar';
import MyLink from './Link'; // Rename your component to avoid conflict with react-router-dom
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/link' element={<MyLink />} />
          <Route path='/about' element={<About />} />
          {/* <Route path="/" element={<Home/>}/> */}
          {/* <Route path='/navbar' element={<Navbar />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Home;
