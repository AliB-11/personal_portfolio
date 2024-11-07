import './index.scss'
import { NavLink } from 'react-router-dom'
import { BsHouse, BsFileEarmark } from "react-icons/bs";
import { LuUser2, LuMail} from "react-icons/lu";
import { GoProject } from "react-icons/go";
import {useState} from 'react'; 
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";


const HomeNavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const list = isOpen;

 

  return (
    <> 
      {list ? 
      <div className='hamburger-background'>
       <button className="close-icon" onClick={() =>  {setIsOpen(!isOpen)}}>
          <IoCloseOutline color="white" size={30} />
       </button>
          <div className='wrappers'>
          <nav> 
            <ul className='navigation-button' > 
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
          </ul>
          </nav>
          </div>
          </div>

      : <button className="hamburger-icon" onClick={() =>  {setIsOpen(!isOpen)}}>
          <FiMenu color="white" size={30} />
      </button> }


    
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
      </ul>
    </nav>
  </div>
  </>

  )
}

export default HomeNavBar

/*

 <li>
          <NavLink exact="true" activeclassname="active" to="/Resume">
            <div className="nav-label">
              <BsFileEarmark color='white' size={20} className='nav-icons'/>
              <span className='headers'>Resume</span>
            </div>
          </NavLink>
        </li>
        
        */ 