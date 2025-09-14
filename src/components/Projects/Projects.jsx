import { IoLogoGithub } from "react-icons/io"

import DAC from '../../assets/images/DAC.png'
import liDAR from '../../assets/images/LiDAR1.png'
import maze from '../../assets/images/maze_resized.png'
import pacman from '../../assets/images/pacman.png'
import newMovie from '../../assets/images/Recommender.png'

import PageHeader from '../headers/PageHeader'
import MainNavBar from '../mainNavBar'
import Tilt from '../tilt'
import './index.scss'
import cpu from '../../assets/images/CPU.png'

const Projects = () => {
  return (
    <section className="projects-section">
      <MainNavBar/>

    
      <div className="fade">
      <div className='about-page'> 
        <div className="text-zone">
          <PageHeader>Projects</PageHeader>
        </div>
      </div>


      
      <div className="projects-grid">
     
      <Tilt className="project-card"
      
        options={{
    max: 15,             // very subtle angle  
    perspective: 1000,  
    scale: 1.01,        // almost no scale  
    speed: 400,  
    easing: "cubic-bezier(.05,.95,.5,1)",  
    glare: true     
  }}  
  >
        <div class="img-wrap">
        <img src={liDAR} alt="Memory Lane screenshot"/> 
        </div>
        <div className='title-flex'> 

           <div className="project-title">Insight 360 LiDAR Spatial Mapper</div>

             <a href="https://github.com/AliB-11/LiDAR-360-Spatial-Mapper"
             className="github-link"
             target="_blank" rel="noopener">
             <IoLogoGithub size={30}  className='git'/>
          </a>


        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">
           An embedded 3D mapping system using an MSP432E401Y micrcontroller and ToF sensor to perform vertical 360° scans and stream data to a PC for real-time visualization.
            </p>
            <span className="tech">
               C/C++ | MATLAB | Arm Cortex M4
            </span>
          </div>
        </div>
      </Tilt>


           <Tilt className="project-card"
           
            options={{
    max: 15,             // very subtle angle  
    perspective: 1000,  
    scale: 1.01,        // almost no scale  
    speed: 400,  
    easing: "cubic-bezier(.05,.95,.5,1)",  
    glare: true     
  }}  >
        <div class="img-wrap">
        <img src={pacman} alt="Memory Lane screenshot"/> 
        </div>
        <div className='title-flex'> 

           <div className="project-title">Pacman Pathfinder</div>

             <a href="https://github.com/AliB-11/PacmanMaze"
             className="github-link"
             target="_blank" rel="noopener">
             <IoLogoGithub size={30}  className='git'/>
          </a>


        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">
              A Java Swing application simulating a Pac-Man-style maze game with event-driven robot navigation, custom keybindings, and modular panel rendering.
            </p>
            <p className="tech">
              JavaSwing | Java | JUnit
            </p>
          </div>
        </div>
      </Tilt>


        <Tilt className="project-card"
           
            options={{
    max: 15,             // very subtle angle  
    perspective: 1000,  
    scale: 1.01,        // almost no scale  
    speed: 400,  
    easing: "cubic-bezier(.05,.95,.5,1)",  
    glare: true     
  }}  
  >
        <div className="img-wrap">
        <img src={maze} alt="Memory Lane screenshot"/> 
        </div>
        <div className='title-flex'> 

           <div className="project-title">Kruskal Maze Generator</div>

             <a href="https://github.com/AliB-11/Maze_generator"
             className="github-link"
             target="_blank" rel="noopener">
             <IoLogoGithub size={30}  className='git'/>
          </a>


        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">
              Generating perfect mazes using Kruskal's algorithm implemented in C and visualization using Python's PIL (Pillow) library. The generated maze is a minimum spanning tree over a grid with no cycles. 
            </p>
            <p className="tech">
              C/C++ | CMake | Python | Pillow (PIL)
            </p>
          </div>
        </div>
      </Tilt>



           <Tilt className="project-card"
           
            options={{
    max: 15,             // very subtle angle  
    perspective: 1000,  
    scale: 1.01,        // almost no scale  
    speed: 400,  
    easing: "cubic-bezier(.05,.95,.5,1)",  
    glare: true     
  }}  
  >
        <div class="img-wrap">
        <img src={newMovie} alt="Memory Lane screenshot"/> 
        </div>
        <div className='title-flex'> 

           <div className="project-title">AI Movie Recommender</div>

             <a href="https://github.com/AliB-11/Movie-Store"
             className="github-link"
             target="_blank" rel="noopener">
             <IoLogoGithub size={30}  className='git'/>
          </a>


        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">
             Ai movie recommender that uses scikit-learn’s TF-IDF vectorization and cosine similarity for content analysis, and collaborative filtering on user rating pattern to deliver personalized movie recommendations.
            </p>
            <p className="tech">
               Typescript | React | FastAPI | Python | Scikit-Learn
            </p>
          </div>
        </div>
      </Tilt>


           <Tilt className="project-card"
           
            options={{
    max: 15,             // very subtle angle  
    perspective: 1000,  
    scale: 1.01,        // almost no scale  
    speed: 400,  
    easing: "cubic-bezier(.05,.95,.5,1)",  
    glare: true     
  }}  >
        <div class="img-wrap">
        <img src={cpu} alt="cpu"/> 
        </div>
        <div className='title-flex'> 

           <div className="project-title"> 16 bit Hack Computer</div>

             <a href="https://github.com/AliB-11/16-bit-Hack-Computer"
             className="github-link"
             target="_blank" rel="noopener">
            <IoLogoGithub size={30}  className='git'/>
          </a>


        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">
              This project implements the 16-bit Hack computer from the nand2tetris course, which includes a working CPU, ALU, and a two-pass assembler which together can run the hack assembly language 
            </p>
            <p className="tech">
              Assembly | RTL design | C++ | HDL
            </p>
          </div>
        </div>
      </Tilt>


              <Tilt className="project-card"
            options={{
    max: 15,             // very subtle angle  
    perspective: 1000,  
    scale: 1.01,        // almost no scale  
    speed: 400,  
    easing: "cubic-bezier(.05,.95,.5,1)",  
    glare: true     
  }}  
           >
        <div class="img-wrap">
        <img src={DAC} alt="Memory Lane screenshot"/> 
        </div>
        <div className='title-flex'> 

           <div className="project-title">3 bit digital to analog converter</div>

             <a href="https://github.com/AliB-11/Digital-Analog-Converter"
             className="github-link"
             target="_blank" rel="noopener">
             <IoLogoGithub size={30}  className='git'/>
          </a>


        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">
              A 3-bit Digital-to-Analog Converter that uses a binary-weighted resistor network to convert three digital input signals into a corresponding analog staircase waveform. 
            </p>
            <p className="tech">
              Op amps | Resistors | AD3
            </p>
          </div>
        </div>
      </Tilt>

      </div>

      
      

        

       
      </div>
  </section>
  )
}

export default Projects

