import React from 'react';
import './App.css';
import About from './COMPONENTS/About';
import Gallery from './COMPONENTS/Gallery';
import Header from './COMPONENTS/Header';
import HEro from './COMPONENTS/HEro';
import Products from './COMPONENTS/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nopage from './COMPONENTS/Nopage';
import Carousal from './COMPONENTS/Carousal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Girls from './COMPONENTS/Girls';
import Women from './COMPONENTS/Women';
import Men from './COMPONENTS/Men';
import Footer from './COMPONENTS/Footer';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Carousal/>
      <Routes>
        <Route path="/" element={<Men />}  />
        <Route path="/women" element={<Women />} />
        <Route path="/girls" element={<Girls />} />
        <Route path="/product" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
