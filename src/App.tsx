import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Research from './pages/Research'
import Teaching from './pages/Teaching'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/live-resume" element={<Experience />} />
      <Route path="/research" element={<Research />} />
      <Route path="/teaching" element={<Teaching />} />
    </Routes>
  )
}

export default App
