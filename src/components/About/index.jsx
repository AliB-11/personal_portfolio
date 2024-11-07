import './index.scss'
import MainNavBar from '../mainNavBar'
import PageHeader from '../headers/pageHeader'


const About = () => {

  
  return (
    <div className='about-page'> 
      <div className="fade">
        <MainNavBar/>
         <div className="text-zone">
          <PageHeader>About</PageHeader>
        </div>
      </div>
    </div>
  )
}

export default About