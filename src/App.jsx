import { useContext } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <Navbar/>
    </div>
  )
}

export default App
