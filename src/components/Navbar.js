import React from "react"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <nav>
      <ul>
   
          <Link to="/">Home</Link>

          <Link to="/teams">Teams</Link>

          <Link to="/examples">About</Link>
 
          <Link to="/images">More</Link>

      </ul>
    </nav>
  )
}

export default Navbar
