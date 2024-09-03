import React, { useEffect, useState } from 'react'
import './index.scss'
import { FaLinkedin} from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import AnimatedLetters from '../AnimatedLetters';
import HomeNavBar from '../homeNavBar';
import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'


const Home = () => {
  

  const [letterClass, setLetterClass] = useState('text-animate'); 
  const nameArray = ['A' , 'l', 'i']
  const jobArray = ['A','s','p','i', 'r', 'i','n','g', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e','r'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  
    return () => {
      clearTimeout(timeoutId)
    }
  }, []);
 
  return (
    <>
    <Link className='logo-main' to="/" >
      <img src={LogoS} className='logo-main' alt='logo'/>
    </Link>
    <HomeNavBar/>
    <div className='container home-page'>
      <div className="text-zone">
        <h1> 
        <span className={letterClass}>H</span> 
        <span className={`${letterClass} _12`}>i,</span> 
        <br/>
        <span className={`${letterClass} _13`}>I</span> 
        <span className={`${letterClass} _14`}>'m</span> 
        &nbsp;
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}></AnimatedLetters>
        <br/>
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18}></AnimatedLetters>
        </h1>
        <h3 className='subtitle'> Computer Engineering Student at McMaster University
        </h3>
        <ul className='navigation-buttons contact-options'> 
          <li className='links'> 
            <a target='_blank' rel='noreferrer' href='' className='media-link'> 
            <FaLinkedin size={25} className='linkedin' />
            </a>
          </li>
          <li className='links'>
            <a target='_blank' rel='noreferrer' href='' className='media-link'>
            <IoLogoGithub size={28} className='github'/>
            </a>
          </li>
      </ul>
    </div>
  </div>
 
  </>
  )
}

export default Home