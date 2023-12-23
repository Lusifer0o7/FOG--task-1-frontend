import React from 'react'
import "./Sidebar.css"
import { FaPowerOff } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";


export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      
      <div className='sidebar-games-menu'>
        <ul className='sidebar-games'>
          <li className='sidebar-games-item'><img src="side-menu__game (1).png"/></li>
          <li className='sidebar-games-item'><img src="side-menu__game (3).png"/></li>
          <li className='sidebar-games-item'><img src="side-menu__game (2).png"/></li>
          <li className='sidebar-games-item'><img src="side-menu__game.png"/></li>
          <li className='sidebar-games-item'><img src="side-menu__career.png"/></li>
        </ul>
      </div>

      <div className='sidebar-bottom'>
        <FaQuestionCircle/>
        <FaPowerOff/>
      </div>
    </div>
  )
}
