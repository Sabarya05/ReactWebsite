import React from 'react'
import './Navbar.css'
import edu from '../../assets/edu.jpg'
const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>Home</li>
            <li>Testimonials</li>
            <li>About </li>
            <li>Programm</li>
            <li>Footer</li>
            <img src={edu} alt="" />

        </ul>
    </nav>
  )
}

export default Navbar