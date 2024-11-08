import './index.scss'
import MainNavBar from '../mainNavBar'
import PageHeader from '../headers/PageHeader'
import { FaLinkedin} from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { BsGlobe } from "react-icons/bs";

const Contact = () => {
  return (

      <div className='about-page'> 
          <div className="fade">
            <MainNavBar/>
          <div className="text-zone">
            <PageHeader>Contact</PageHeader>
          </div>
        <div className='contact-container'>
          <div className='contact-box'>
            <div className='contact-text'> 
              <div className='contact-header'> 
                <div className='email-title'> Email  </div>
              <TfiEmail className='email-logo'/>
              </div>
              <div className='contact-body'>
                <a href="mailto: bandaa2@mcmaster.ca" target="_blank" className="email-link">bandaa2@mcmaster.ca</a>
              </div>
            </div>
          </div>
          <div className='contact-box'>
            <div className='contact-text'> 
              <div className='contact-header'> 
                <div className='email-title'> Social Links </div>
              <BsGlobe className='email-logo'/>
              </div>
              <div className='contact-body'>
                <div className='social-contacts'>
                  <div className='social-contacts'>
                    <p className='social-text'> Github </p>
                    <a href="" target="_blank" className="email-link"> <IoLogoGithub className='github-logo'/></a> 
                  </div>
                  <div className='social-contacts'>
                    <p className='social-text'> Linkedin </p>
                    <a href="" target="_blank" className="email-link"> <FaLinkedin className='github-logo'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      
     
  )
}

export default Contact