import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.scss"
function Navbar() {
  return (
    <>
      <div className='navbar'>
         <div className='navbar_list'>
           <div className='navbar_logo'>
             <NavLink to={"/"}><h2>Notary</h2></NavLink>
           </div>
           <div className='navbar_ul'>
            <ul>
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/add"}>Add</NavLink></li>
              </ul>   
           </div>
         </div>
      </div>
    </>
  )
}

export default Navbar
