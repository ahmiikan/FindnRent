import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import Billing from './assets/pages/Billing';




function App() {
  return (
    <div className="bg-img">
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/billing" element = {<Billing/>}/>
    </Routes>
    <Footer/>
    </Router>
    </div>
  )
}

export default App