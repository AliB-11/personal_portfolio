import './index.scss'
import MainNavBar from '../mainNavBar'
import PageHeader from '../headers/PageHeader';
import profileImage from '../../assets/images/profileImage.png'
import TechnicalSkills from '../TechnicalSkills/TechnicalSkills';

const About = () => {
  return (
    <div className='about-page'>
      <MainNavBar />

      <div className='fade'>
        <div className='about-header'>
          <PageHeader>About</PageHeader>
        </div>

        <div className='about-me'>
          <div className='introduction'>
            <p>
              I’m a Computer Engineering student at McMaster University with a growing focus on hardware,
              embedded systems, and digital design. My interests lean toward analog circuits, embedded design,
              FPGA/RTL design, and the debugging and validation techniques used to turn concepts into working hardware.
            </p>
            <p>
              I enjoy working at the intersection of software and hardware, building low-level systems that
              interface directly with real-world signals and devices. I’m especially interested in projects that
              combine rigorous analysis, simulation, and hands-on testing.
            </p>
          </div>

          <img src={profileImage} className='profileImage' alt='Ali Bandali' />
        </div>

        <div className='focus-grid'>
          <div className='focus-card'>
            <h3>Hardware Focus</h3>
            <p>Analog and digital circuit design, power systems, signal conditioning, and embedded hardware validation.</p>
          </div>

          <div className='focus-card'>
            <h3>Design & Simulation</h3>
            <p>SPICE simulation, RTL design, PCB-oriented thinking, and performance analysis through real measurements.</p>
          </div>

          <div className='focus-card'>
            <h3>Debugging</h3>
            <p>Testing with oscilloscopes, signal generators, and multimeters to verify hardware behavior and improve accuracy.</p>
          </div>
        </div>

        <div className='skills-section'>
          <TechnicalSkills>Technical Skills</TechnicalSkills>

          <div className='tech-stack-container'>
            <div className='skills-column'>
              <div className='subcodetitle'>Languages</div>
              <div className='skill-list'>
                <span className='skill-pill'>C/C++</span>
                <span className='skill-pill'>SystemVerilog</span>
                <span className='skill-pill'>Verilog</span>
                <span className='skill-pill'>Python</span>
                <span className='skill-pill'>Java</span>
                <span className='skill-pill'>Rust</span>
                <span className='skill-pill'>Assembly</span>
              </div>
            </div>

            <div className='skills-column'>
              <div className='subcodetitle'>Tools & Design</div>
              <div className='skill-list'>
                <span className='skill-pill'>Quartus</span>
                <span className='skill-pill'>ModelSim</span>
                <span className='skill-pill'>Vivado</span>
                <span className='skill-pill'>KiCad</span>
                <span className='skill-pill'>LTspice</span>
                <span className='skill-pill'>PSpice</span>
                <span className='skill-pill'>Git</span>
                <span className='skill-pill'>Linux</span>
                <span className='skill-pill'>Oscilloscope</span>
              </div>
            </div>

            <div className='skills-column'>
              <div className='subcodetitle'>Embedded & Systems</div>
              <div className='skill-list'>
                <span className='skill-pill'>ARM Cortex-M</span>
                <span className='skill-pill'>UART</span>
                <span className='skill-pill'>I2C</span>
                <span className='skill-pill'>GPIO</span>
                <span className='skill-pill'>FreeRTOS</span>
                <span className='skill-pill'>Kernel Design</span>
              </div>
            </div>

            <div className='skills-column'>
              <div className='subcodetitle'>Debugging & Analysis</div>
              <div className='skill-list'>
                <span className='skill-pill'>Multimeter</span>
                <span className='skill-pill'>Signal Generator</span>
                <span className='skill-pill'>Circuit Analysis</span>
                <span className='skill-pill'>Filtering</span>
                <span className='skill-pill'>PCB Design</span>
                <span className='skill-pill'>System Debugging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
 