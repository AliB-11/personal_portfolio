import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import { BsHouse, BsFileEarmark } from "react-icons/bs";
import { LuUser2, LuMail} from "react-icons/lu";
import { GoProject } from "react-icons/go";
import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'

const MainNavBar = () => {
  return (
    <>
      <div className='main-nav-bar'> </div>
        <nav> 
          <ul className='main-nav-buttons'> 
            <li> 
              <NavLink exact="true" activeclassname="active" to="/">
                <div className='nav-label'> 
                  <BsHouse color='white' size={20} className='nav-icons'/> 
                  <span className='headers'>Home</span>
                </div>
              </NavLink>
          </li>

          <li>
            <NavLink className="about-link" exact="true" activeclassname="active" to="/about">
              <div className="nav-label">
                <LuUser2 color='white' size={20} className='nav-icons'/>
                <span className='headers'>About</span>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink exact="true" activeclassname="active" to="/Projects">
              <div className="nav-label">
                <GoProject  color='white' size={20} className='nav-icons'/>
                <span className='headers'>Projects</span>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink className ="contact-link"exact="true" activeclassname="active" to="/contact" >
              <div className="nav-label">
                <LuMail color='white' size={20} className='nav-icons'/>
                <span className='headers'>Contact</span>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink exact="true" activeclassname="active" to="/Resume">
              <div className="nav-label">
                <BsFileEarmark color='white' size={20} className='nav-icons'/>
                <span className='headers'>Resume</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link className='logo-main' to="/" >
        <img src={LogoS} className='logo-main' alt='logo'/>
     </Link>
    </>
  )
}

export default MainNavBar