import React, { Fragment } from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home.tsx';
import { Store } from './pages/Store.tsx';
import { About } from './pages/About.tsx';
import { Container } from 'react-bootstrap';
import { Navbar } from './components/Navbar.tsx';
import { ShoppingCartProvider } from './context/ShoppingCartContext.tsx';

function App() {
  return ( 
  <ShoppingCartProvider>
    <Navbar />

    <Container> 
      <Routes>
        <Route path="/About" element = {<About />} />
        <Route path="/" element = { <Home /> } />
        <Route path="/Store" element = {<Store />} />
      </Routes>
    </Container>
  </ShoppingCartProvider>
  )

}

export default App;
