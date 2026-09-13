import { IoLogoGithub } from "react-icons/io"

import DAC from '../../assets/images/DAC.png'
import liDAR from '../../assets/images/LiDAR1.png'
import PCB from '../../assets/images/PCB.png'

import PageHeader from '../headers/PageHeader'
import MainNavBar from '../mainNavBar'
import Tilt from '../tilt'
import './index.scss'
import cpu from '../../assets/images/CPU.png'

const Projects = () => {
  return (
    <section className="projects-section">
      <MainNavBar/>

      <div className="fade projects-page">
        <div className="projects-header">
          <PageHeader>Projects</PageHeader>
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
          <img className="pcb-image" src={PCB} alt="Buck converter and signal conditioning PCB design"/> 
        </div>
        <div className='title-flex'> 

            <div className="project-title">Buck Converter &amp; Signal Conditioning PCB Designs</div>
            <a href="https://github.com/AliB-11/Signal-Conditioning-Circuit-and-Buck-Converter-PCB-Designs"
              className="github-link"
              target="_blank" rel="noopener noreferrer">
              <IoLogoGithub size={30} className="git" />
            </a>

        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">Designed and tested a second-order signal-conditioning filter and 5 V/1 A buck converter, using PSpice and KiCad to validate performance and component choices.</p>
            <p className="tech">
              PSpice | Circuit Design | KiCad
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
          <img src={cpu} alt="16-bit Hack Computer illustration"/> 
        </div>
        <div className='title-flex'> 

            <div className="project-title">16-bit Hack Computer</div>
            <a href="https://github.com/AliB-11/16-bit-Hack-Computer"
              className="github-link"
              target="_blank" rel="noopener noreferrer">
              <IoLogoGithub size={30} className="git" />
            </a>

        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">Implemented the 16-bit Hack computer from nand2tetris, including its CPU, ALU, memory, and two-pass assembler for running Hack assembly programs.</p>
            <p className="tech">
              Assembly | RTL Design | C++ | HDL
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
          <img src={`${import.meta.env.BASE_URL}mini-risc-cpu.svg`} alt="Mini RISC CPU datapath illustration"/> 
        </div>
        <div className='title-flex'> 

            <div className="project-title">Mini RISC CPU</div>
            <a href="https://github.com/AliB-11/Mini-Risc-CPU"
              className="github-link"
              target="_blank" rel="noopener noreferrer">
              <IoLogoGithub size={30} className="git" />
            </a>

        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">Designed a simple Verilog RISC processor with a complete datapath, control unit, memory subsystem, and I/O ports, then verified instruction execution in ModelSim.</p>
            <p className="tech">
              Verilog | ModelSim | RTL
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
        <img src={`${import.meta.env.BASE_URL}minios-kernel.svg`} alt="MiniOS x86 kernel terminal illustration"/> 
        </div>
        <div className='title-flex'> 

           <div className="project-title">MiniOS: x86 Kernel with Preemptive Task Scheduling</div>
           <a href="https://github.com/AliB-11/Rust-OS"
             className="github-link"
             target="_blank" rel="noopener noreferrer">
             <IoLogoGithub size={30} className="git" />
           </a>

        </div>
       
        <div className="project-info">
          <div className="text">
            <p className="description">Built a small x86 kernel with VGA and UART interfaces, interrupt handling, virtual memory allocators, and a priority-based preemptive scheduler debugged through QEMU and GDB.</p>
            <p className="tech">
              Rust | Assembly | C/C++ | QEMU
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

