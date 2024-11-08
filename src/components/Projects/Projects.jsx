import React from 'react'
import './index.scss'
import MainNavBar from '../mainNavBar'
import PageHeader from '../headers/PageHeader'
import robotProject from '../../assets/images/robot.png'
import movie from '../../assets/images/movie.png'
import umbrella from '../../assets/images/umbrella.png'

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="fade">
      <div className='about-page'> 
        <MainNavBar/>
        <div className="text-zone">
          <PageHeader>Projects</PageHeader>
        </div>
      </div>
        <div className="projects-container">
          <a href="https://github.com/AliB-11/RobotMaze" target='_blank' className="project-card">
            <img src={robotProject} alt="Project 1" />
            <div className='project-title'>Robot Maze</div>
           <div className='project-text'> Java OOP robot maze game made with java swing for the gui interface and j unit testing</div>
          </a>

          <a href="https://github.com/AliB-11/Movie-Store" target='_blank' className="project-card">
            <img src={movie} alt="Project 2" />
            <div className='project-title'>Movie search and filtering Website</div>
           <div className='project-text'>Movie database website using React and TypeScript, leveraging API's using axios to retrieve and
            display up to date movie data.</div>
          </a>

    
          <a href="https://subdued-opinion-1a5.notion.site/Project-4-Power-in-community-09b6e2cdbae14d169af2c9bb3e8d6b83" target='_blank' className="project-card">
            <img src={umbrella} alt="Project 3" />
            <div className='project-title'>Hands free umbrella</div>
           <div className='project-text'>3D printed adjustable Umbrella Holder designed for easy to use and hands free functionality</div>
          </a>
        </div>
      </div>
  </section>
  )
}

export default Projects