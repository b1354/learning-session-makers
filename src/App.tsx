import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Index from './pages/Index'
import About from './pages/About'
import FormPage from './pages/FormPage'
import CheckoutPage from './pages/CheckoutPage'
import { CartContext } from './practice/advanced-react/context-api'

function App() {
  const [cart, setCart] = useState<ICart[]>([])
  
  const addToCart = (item: ICart) => {
    setCart(prev => [...prev, item])
  }

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
