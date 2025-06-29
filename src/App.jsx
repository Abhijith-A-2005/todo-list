import './App.css'
import Counter from './components/Counter.jsx'
import Tasks from './components/Task.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
 

  return (
  <>
  <BrowserRouter>
      <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/To-Do" element={<Tasks />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main> 
    </div>
  </BrowserRouter>
   
  </>
  )
}

export default App
