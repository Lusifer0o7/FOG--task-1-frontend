import React from 'react'
import './Header.css';


export default function Header() {
  return (
    <div className='header-container'>
        <ul className='header-menu'>
          <li className='header-menu-item'>Home</li>
          <li className='header-menu-item'>Multiplayer</li>
          <li className='header-menu-item'>Campaign</li>
          <li className='header-menu-item' style={{borderBottom:'1px solid white'}}>Soldier</li>
          <li className='header-menu-item'>Store</li>
          <li className='header-menu-item'>More</li>
        </ul>

        <div className='header-logo'>
          <div>
            <img alt='' src='home__level.png' width='50px'/>
            <img alt='' src='home__logo.png' />
          </div>
        </div>
    </div>
  )
}
