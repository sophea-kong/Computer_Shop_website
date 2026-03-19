import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Build from './pages/Build'
import Contact from './pages/Contact'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Build />} />
        <Route path="/build" element={<Build />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
