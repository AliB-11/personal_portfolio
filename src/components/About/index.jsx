import './index.scss'
import MainNavBar from '../mainNavBar'
import PageHeader from '../headers/PageHeader';
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact, FaDocker } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import profileImage from '../../assets/images/profileImage.png'
import TechnicalSkills from '../TechnicalSkills/TechnicalSkills';
import python_img from '../../assets/images/python_img.png'
import java_img from '../../assets/images/java_img.png'
import sql from '../../assets/images/sql.svg'
import { SiSpringboot } from "react-icons/si";


const About = () => {

  
  return (
    <div className='about-page'> 
     <MainNavBar/>
      <div className="fade">
         <div className="text-zone">
          <PageHeader>About</PageHeader>
        </div>
      <div className='about-me'>
        <div className='introduction'>
          Hello! My name is Ali, and welcome to my portfolio. I am currently a second-year Computer Engineering student at McMaster University, with a strong interest in a variety of fields, including web development, machine learning, computer vision, and hardware engineering. Through this portfolio, I aim to showcase the projects and skills that reflect my academic journey, my dedication to teamwork, and my commitment to continuous improvement as an aspiring engineer. 
        </div>
      <img src={profileImage} className='profileImage'></img>
      </div> 
      
      <div className="text-zone-1">
        <TechnicalSkills> Technical Skills </TechnicalSkills>
        </div>
        
      <div className='tech-stack-container'> 
        <div className='languages'>
            <div className='subcodetitle'>Languages</div>     
             <div className='navigate-buttons'> 
                    <div className='link-skills'>  
                      <img src={java_img} className='python_img' />   
                      <div>Java</div>               
                    </div>
                    <div className='link-skills'>
                      <IoLogoJavascript size={30} className='javascript'/>
                      <div>JavaScript</div>
                    </div>
                      <div className='link-skills'>
                        <img className='python_img'src={python_img}/>
                       <div>Python</div> 
                      </div>
                      <div className='link-skills'>
                        <SiCplusplus size={30} className='Cpp'></SiCplusplus>
                       <div>C++</div> 
                      </div>
                      <div className='link-skills'>
                        <img src={sql} className='python_img'/>
                       <div>SQL</div> 
                      </div>
                </div>
        </div>

        <div className='languages'>
            <div className='subcodetitle'>Frameworks | Libraries | Tools</div>     
              <div className='navigate-buttons'> 
                    <div className='link-skills'>  
                      <FaNodeJs size={34} className='node' />   
                      <div>Node js</div>               
                    </div>
                    <div className='link-skills'>  
                      <FaReact size={34} className='react' />   
                      <div>React</div>               
                    </div>
                    <div className='link-skills'>  
                      <SiMongodb size={34} className='mongo' />   
                      <div>MongoDB</div>               
                    </div>
                     <div className='link-skills'>  
                      <SiSpringboot size={34} className='spring' />   
                      <div>Spring Boot</div>               
                    </div>
                    <div className='link-skills'>  
                      <FaDocker size={34} className='docker' />   
                      <div>Docker</div>               
                    </div>
                    </div>
               
        </div>



        </div>
      </div>
    </div>
  )
}

export default About











 