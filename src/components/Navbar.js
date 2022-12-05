import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
      <ul>
         <li >   <Link to="/users"> users </Link></li>
         <li >   <Link to="/posts"> posts </Link></li>

      </ul>
    </>
  )
}

export default Navbar
