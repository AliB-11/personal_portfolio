import React from 'react'
import './index.scss'
import MainNavBar from '../mainNavBar'
import PageHeader from '../headers/PageHeader'
import robotProject from '../../assets/images/robot.png'
import movie from '../../assets/images/movie.png'
import umbrella from '../../assets/images/umbrella.png'
import pacman from '../../assets/images/pacman.png'
import liDAR from '../../assets/images/LiDAR1.png'
import { IoLogoGithub } from "react-icons/io";
import { PiLinkSimple } from "react-icons/pi";
import DAC from '../../assets/images/DAC.png'

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
     
      <div className="project-card">
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
           An embedded 3D mapping system using an MSP432E401Y and VL53L1X ToF sensor on a stepper motor to perform vertical 360° scans and stream point-cloud data to a PC for real-time visualization.
            </p>
            <p className="tech">
              Tech: C, Matlab, Arm Cortex M4
            </p>
          </div>
        </div>
      </div>


           <div className="project-card">
        <div class="img-wrap">
        <img src={DAC} alt="Memory Lane screenshot"/> 
        </div>
        <div className='title-flex'> 

           <div className="project-title">3 bit digital to analog converter</div>

             <a href="https://github.com/yourusername/memory‑lane"
             className="github-link"
             target="_blank" rel="noopener">
             <IoLogoGithub size={30}  className='git'/>
          </a>


        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">
              A 3-bit Digital-to-Analog Converter (DAC) that uses a binary-weighted resistor network (R, 2R, 4R) to convert three digital input signals of distinct frequencies (1 kHz, 500 Hz, and 250 Hz) into a corresponding analog staircase waveform. 
            </p>
            <p className="tech">
              Components: op-amp, resistors
            </p>
          </div>
        </div>
      </div>


           <div className="project-card">
        <div class="img-wrap">
        <img src={pacman} alt="Memory Lane screenshot"/> 
        </div>
        <div className='title-flex'> 

           <div className="project-title">Pacman Maze</div>

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
              Tech: JavaSwing, Java
            </p>
          </div>
        </div>
      </div>


           <div className="project-card">
        <div class="img-wrap">
        <img src={movie} alt="Memory Lane screenshot"/> 
        </div>
        <div className='title-flex'> 

           <div className="project-title">Movie filtering Website</div>

             <a href="https://github.com/AliB-11/Movie-Store"
             className="github-link"
             target="_blank" rel="noopener">
             <IoLogoGithub size={30}  className='git'/>
          </a>


        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">
              Movie database website leveraging external API's to retreive and filter up to date movie data. 
            </p>
            <p className="tech">
              Tech: Axios, Tailwind CSS, Typescript, React
            </p>
          </div>
        </div>
      </div>


           <div className="project-card">
        <div class="img-wrap">
        <img src={umbrella} alt="Memory Lane screenshot"/> 
        </div>
        <div className='title-flex'> 

           <div className="project-title"> Adjustable Wheelchair Umbrella Holder</div>

             <a href="https://subdued-opinion-1a5.notion.site/Project-4-Power-in-community-09b6e2cdbae14d169af2c9bb3e8d6b83"
             className="github-link"
             target="_blank" rel="noopener">
             <PiLinkSimple size={30}  className='git'/>
          </a>


        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">
              A modular, weather-resistant umbrella holder engineered for universal wheelchair armrest compatibility, featuring multi-axis adjustability and a secure, tool-free mounting system.
            </p>
            <p className="tech">
              Tech: 3D printing, Inventor
            </p>
          </div>
        </div>
      </div>

      </div>

      
      

        

       
      </div>
  </section>
  )
}

export default Projects

