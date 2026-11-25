import './App.css'
import { useReducer, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import LazyFallback from './components/LazyFallback'
import { CartContext } from './practice/advanced-react/CartContext'
import ErrorBoundary from './components/ErrorBoundary'
import BuggyComponent from './practice/advanced-react/error-boundaries-and-suspense/BuggyComponent'

const Index = lazy(() => import('./pages/Index'))
const About = lazy(() => import('./pages/About'))
const FormPage = lazy(() => import('./pages/FormPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const CallbackPage = lazy(() => import('./pages/CallbakPage'))
const LazyLoadingPage = lazy(() => import('./pages/LazyLoadingPage'))

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
    <ErrorBoundary>
      <CartContext.Provider value={{ cart, dispatch }}>
        <BrowserRouter>
          <Suspense fallback={<LazyFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/callback" element={<CallbackPage />} />
              <Route path="/lazy-loading" element={<LazyLoadingPage />} />
              <Route path="/buggy-component" element={<BuggyComponent />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CartContext.Provider>
    </ErrorBoundary>
  )
}

export default App
