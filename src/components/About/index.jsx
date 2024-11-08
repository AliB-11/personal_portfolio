import './index.scss'
import MainNavBar from '../mainNavBar'
import PageHeader from '../headers/pageHeader';
import { FaNode, FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import profileImage from '../../assets/images/profileImage.jpg'


const About = () => {

  
  return (
    <div className='about-page'> 
      <div className="fade">
        <MainNavBar/>
         <div className="text-zone">
          <PageHeader>About</PageHeader>
        </div>
      <div className='about-me'>
        <div className='introduction'>
          Hello! My name is Ali, and welcome to my portfolio. I am currently a second-year Computer Engineering student at McMaster University, with a strong interest in a variety of fields, including web development, machine learning, computer vision, and hardware engineering. Through this portfolio, I aim to showcase the projects and skills that reflect my academic journey, my dedication to teamwork, and my commitment to continuous improvement as an aspiring engineer. 
        </div>
      <img src={profileImage} className='profileImage'></img>
      </div> 
      <div className='skills-title'>Technical Skills</div>
      <div className='tech-stack-container'> 
        <div className='languages'>
            <div className='subcodetitle'>Languages</div> 
            <div className='coding-chart'>
               <div className='top-chart'>
                  <div className='code'>
                    <FaPython className='image' color='#ffd343'/>
                    <div className='label'>Python</div>
                  </div>
                  <div className='code'>
                    <FaJava className='image' color='#f89820'/>
                    <div className='label'>Java</div>
                  </div>
                </div>
                <div className='bottom-chart'>
                  <div className='code'>
                    <SiCplusplus className='image' color='#00549D'></SiCplusplus>
                   <div className='label'>C/C++</div>
                  </div>
                  <div className='code'>
                    <IoLogoJavascript className='image' color='	#f0db4f'/>
                    <div className='label'>Javascript</div>
                  </div>
                </div>
              </div>
        </div>

        <div className='languages frame'>
            <div className='subcodetitle'>Frameworks/Libraries</div> 
            <div className='coding-chart'>
               <div className='top-chart'>
                  <div className='code'>
                    <FaReact className='image' color='#61dbfb'/>
                    <div className='label'>React</div>
                  </div>
                  <div className='code'>
                    <FaNodeJs className='image' color='#66cc33'/>
                    <div className='label'>Node</div>
                  </div>
                </div>
                <div className='bottom-chart'>
                  <div className='code'>
                    <SiMongodb className='image mongo' color='#4db33d'/>
                   <div className='label mongol'>MongoDB</div>
                  </div>
                  <div className='code'>
                    <SiExpress className='image express' color='#ffffff'/>
                    <div className='label'>Express</div>
                  </div>
                </div>
              </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default About