import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/About'
import Home from './components/Home'
import Layout from './components/Layout'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

function App() {

  

  return (
    <> 
      <Routes> 
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
