import React, { Fragment } from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/home.tsx';
import { Store } from './pages/store.tsx';
import { About } from './pages/about.tsx';
import { Container } from 'react-bootstrap';
import { Navbar } from './components/Navbar.tsx';

function App() {
  return ( 
  <>
    <Navbar />

    <Container> 
      <Routes>
        <Route path="/about" element = {<About />} />
        <Route path="/" element = { <Home /> } />
        <Route path="/store" element = {<Store />} />
      </Routes>
    </Container>
  </>
  )

}

export default App;
