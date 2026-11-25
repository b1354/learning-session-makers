import './App.css'
import { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Index from './pages/Index'
import About from './pages/About'
import FormPage from './pages/FormPage'
import CheckoutPage from './pages/CheckoutPage'
import CallbackPage from './pages/CallbakPage'
import { CartContext } from './practice/advanced-react/CartContext'

interface ICart {
  name: string
  price: number
  imageSrc?: string
}

const cartReducer = (state: ICart[], action: { type: string; payload?: any }): ICart[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]
    case 'REMOVE_ITEM':
      return state.filter((_, index) => index !== action.payload)
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

function App() {
  const [cart, dispatch] = useReducer(cartReducer, [])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
