import React from 'react'
import { Link } from 'react-router'
import { CartContext } from '../practice/advanced-react/CartContext'
import CartItemsList from '../components/CartItemsList'
import SButton from '../practice/intermediate-react/css-styling/SButton'

const CheckoutPage = () => {
  const { cart } = React.useContext(CartContext)

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
            <CartItemsList showRemove={false} />
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Details</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <SButton 
              variant="primary" 
              size="large" 
              className="w-full"
              disabled={cart.length === 0}
            >
              Pay ${total.toFixed(2)}
            </SButton>

            <p className="text-center text-sm text-gray-500 mt-4">
              {cart.length === 0 ? 'Add items to cart to checkout' : 'Secure payment by Stripe'}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-500 hover:text-blue-700 font-medium">
          ← Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default CheckoutPage