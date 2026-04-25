import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
   
  return (
    <div className='p-5 rounded-bl-3xl absolute top-0 right-0 z-10 bg-[#282829] border border-[#383838] rounded-tr-lg'>
      <ul className='flex gap-5'>
        <li>
            <NavLink
              to="/"
              className={(e) =>{
                return ` ${e.isActive?"text-[hsl(45,100%,72%)] font-medium text-lg poppins" :"text-white font-medium text-lg poppins"}`
              }}
            >
              
              About
            </NavLink>
          </li>
        <li>
            <NavLink
              to="/skills"
              className={(e) =>{
                return ` ${e.isActive?"text-[hsl(45,100%,72%)] font-medium text-lg poppins" :"text-white font-medium text-lg poppins"}`
              }}
            >
              
              Skills
            </NavLink>
          </li>
        
        <li>
            <NavLink
              to="/portfolio"
              className={(e) =>{
                return ` ${e.isActive?"text-[hsl(45,100%,72%)] font-medium text-lg poppins" :"text-white font-medium text-lg poppins"}`
              }}
            >
              
              Portfolio
            </NavLink>
          </li>
        <li>
            <NavLink
              to="/contact"
              className={(e) =>{
                return ` ${e.isActive?"text-[hsl(45,100%,72%)] font-medium text-lg poppins" :"text-white font-medium text-lg poppins"}`
              }}
            >
              
              Contact
            </NavLink>
          </li>
        
        
      </ul>
    </div>
  )
}

export default Navbar
