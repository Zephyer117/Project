import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Portfolio from './Component/Portfolio'
import Contact from './Component/Contact'
import Project from './Component/Project'
import Navbar from './Component/Navbar'
import SocialLinks from './Component/SocialLinks'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Project />
        <Contact />
        <SocialLinks />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Portfolio" element={<Portfolio />} />
          <Route exact path="/project" element={<Project />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
