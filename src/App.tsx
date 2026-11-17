import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import Index from './pages/Index'
import About from './pages/About'
import FormPage from './pages/FormPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
