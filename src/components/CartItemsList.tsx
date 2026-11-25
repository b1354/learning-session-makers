import React from 'react'
import { CartContext } from '../practice/advanced-react/CartContext'

interface CartItemsListProps {
  onRemove?: (index: number) => void
  showRemove?: boolean
}

const CartItemsList = ({ onRemove, showRemove = true }: CartItemsListProps) => {
  const { cart, dispatch } = React.useContext(CartContext)

  const handleRemove = (index: number) => {
    if (onRemove) {
      onRemove(index)
    } else if (showRemove) {
      dispatch({ type: 'REMOVE_ITEM', payload: index })
    }
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  if (cart.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p className="text-lg">Your cart is empty</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {cart.map((item, index) => (
        <div key={index} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            {item.imageSrc && (
              <img 
                src={item.imageSrc} 
                alt={item.name} 
                className="w-16 h-16 object-cover rounded"
              />
            )}
            <div>
              <h4 className="font-medium text-gray-900">{item.name}</h4>
              <p className="text-gray-500">${item.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-900">${item.price.toFixed(2)}</span>
            {showRemove && (
              <button
                onClick={() => handleRemove(index)}
                className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
      <div className="border-t pt-4">
        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default CartItemsList