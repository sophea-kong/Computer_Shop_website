import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Build from './pages/Build'
import Contact from './pages/Contact'
import Home from './pages/Home'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Build />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
