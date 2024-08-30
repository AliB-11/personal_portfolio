import { Outlet } from 'react-router-dom';
import MainNavBar from '../mainNavBar';
import './index.scss';



const Layout = () => {
  return (
    <div className='App'>
      <MainNavBar/>
      <div className="page">
        <Outlet/>
      </div>
    
    </div>
  )
}

export default Layout