import './index.scss'
import MainNavBar from '../mainNavBar'
import PageHeader from '../headers/pageHeader'


const About = () => {

  
  return (
    <div className='about-page'> 
    <div className="text-zone">
      <PageHeader>About</PageHeader>
    </div>
    <MainNavBar/>
    </div>
  )
}

export default About