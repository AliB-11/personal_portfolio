import { Outlet } from 'react-router-dom';
import ParticlesComponent from '../particles';
import './index.scss';




const Layout = () => {
  return (
    
    <div className='App'>
      <ParticlesComponent id='particles'></ParticlesComponent>
      <div className='footer'>
        <div className='footer-text'> 
         &#169; Ali Bandali 2025, <span className='footer-rights'>All rights reserved</span>
        </div>
      </div>
      <div className="page">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout