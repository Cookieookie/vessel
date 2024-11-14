import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/home.tsx';
import { Store } from './pages/store.tsx';
import { About } from './pages/about.tsx';

function App() {
  return  <div class="container">
    <Routes>
      <Route path="/about" element = {<About />} />
      <Route path="/home" element = { <Home /> } />
      <Route path="/store" element = {<Store />} />
    </Routes>
  </div>
  
}

export default App;
