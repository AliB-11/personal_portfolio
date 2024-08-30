import './index.scss'
import {Link, NavLink } from 'react-router-dom'
import { BsHouse, BsFileEarmark } from "react-icons/bs";
import { LuUser2, LuMail} from "react-icons/lu";
import LogoS from '../../assets/images/logo-s.png'
import { GoProject } from "react-icons/go";
import { FaLinkedin} from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";


import React from 'react'

const MainNavBar = () => {
  return (
    <> 
     <Link className='logo' to="/">
        <img src={LogoS} alt='logo'/>
      </Link>

    <div className='wrapper'>
     
      <nav> 
        <ul className='navigation-buttons' > 
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

    <ul className='navigation-buttons'> 

      <li className='links'> 
        <a target='_blank' rel='noreferrer' href='' className='media-link'> 
        <FaLinkedin color='#ffffff' size={22} className='linkedin' />
        </a>
      </li>
      
      <li className='links'>
        <a target='_blank' rel='noreferrer' href='' className='media-link'>
        <IoLogoGithub color='#ffffff' size={22} className='github'/>
        </a>
      </li>

    </ul>
  </div>

    </>

  )
}

export default MainNavBar