
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss'

const TechnicalSkills = ({children}) => {

  const [loaded, setLoaded] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setLoaded(false); // Reset the loaded state
    // Simulate the load event by setting loaded to true after a short delay
    const timer = setTimeout(() => {
        setLoaded(true);
    }, 350); 

    return () => clearTimeout(timer); // Cleanup timer on unmount
}, [location]); // Trigger effect on location change


  return (
    
    <h2 className={`underline ${loaded ? 'loaded' : ''}`}>{children}</h2>
  )
}

export default TechnicalSkills