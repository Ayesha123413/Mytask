import logo from './logo.svg'
import './App.css'
import Explore from './component/Explore/Explore.js'
import About from './component/About/About.js'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './component/Navbar/Navbar'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/explore" element={<Explore />} />
      </Routes>
    </div>
  )
}

export default App
