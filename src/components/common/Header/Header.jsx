import React from 'react'
import './header.css'


const Header =() =>{
return(
   <header className='wrapper' id='header'>
    <div className="header">
        <div className="logo">
            <h1>Educational</h1>
        </div>
        <div className="menu">
            <ul className='nav'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Courses</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
        <div className='btn'>
            <button> Certficate </button>
        </div>
    </div>

   </header>
)

}

export default Header