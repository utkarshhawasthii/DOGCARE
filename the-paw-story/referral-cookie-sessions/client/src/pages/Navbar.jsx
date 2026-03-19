import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Navbar.css'

const Navbar = () => {
  return (
    <div id="Navbar">
      <Link to="/adoption"><h4>Adoption centre</h4></Link>
      <Link to="/report"><h4>Report accident</h4></Link>
      <Link to="/shop"><h4>Shop</h4></Link>
      <Link to="/info"><h4>Info page</h4></Link>
      <Link to="/health"><h4>Dog health</h4></Link>
      <Link to="/detect"><h4>AI Detector</h4></Link>
    </div>
  )
}

export default Navbar
