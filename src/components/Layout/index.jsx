import { Outlet } from 'react-router-dom';
import MainNavBar from '../mainNavBar';
import './index.scss';
import ParticlesComponent from '../particles';



const Layout = () => {
  return (
    <div className='App'>
      <ParticlesComponent id='particles'></ParticlesComponent>
      <MainNavBar/>
      <div className="page">
        <Outlet/>
      </div>
    
    </div>
  )
}

export default Layout