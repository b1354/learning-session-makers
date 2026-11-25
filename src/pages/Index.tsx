import React from 'react'
import BasicComponent from '../practice/foundational-react/BasicComponent'
import CheckBoxComponent from '../practice/intermediate-react/conditional-list-rendering/CheckBox'
import ApiPlayground from '../practice/intermediate-react/lifecycle-method-hooks/ApiPlayground'
import PasswordInput from '../practice/intermediate-react/lifecycle-method-hooks/PasswordInput'
import Mapping from '../practice/intermediate-react/Mapping'
import SButton from '../practice/intermediate-react/css-styling/SButton'
import SCard from '../practice/intermediate-react/css-styling/SCard'
import { CartContext } from '../practice/advanced-react/CartContext'
import { Link } from 'react-router'

interface ICart {
    name: string
    price: number
    imageSrc?: string
}

const products: ICart[] = [
    { name: 'Gucci Bag', price: 1200.00, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk39XkZRTODftzkKQg6jpU17_BvmmnsOAEMd-K_nYmIw&s=10' },
    { name: 'Gucci Belt', price: 450.00, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk39XkZRTODftzkKQg6jpU17_BvmmnsOAEMd-K_nYmIw&s=10' },
    { name: 'Gucci Shoes', price: 890.00, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk39XkZRTODftzkKQg6jpU17_BvmmnsOAEMd-K_nYmIw&s=10' },
]

const Index = () => {
    const [showDadApi, setshowDadApi] = React.useState(false)
    const [showCatApi, setshowCatApi] = React.useState(false)
    const { cart, dispatch } = React.useContext(CartContext)

    const total = cart.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className="relative p-2">
            <BasicComponent nama="Bayu" />
            <CheckBoxComponent className="px-4" checked={false} notes='ini adalah contoh' name="combo1" isTodos={true} />
            <Mapping todosData={[
                { id: 1, text: 'Belajar React', completed: false },
                { id: 2, text: 'Belajar TypeScript', completed: true },
                { id: 3, text: 'Belajar Tailwind CSS', completed: false },
            ]} />

            <PasswordInput />
            <div className="p-2">
                <button
                    className="text-blue-500 underline font-light text-sm p-2"
                    onClick={() => setshowDadApi(!showDadApi)}>
                    {showDadApi ? 'Thats Enough Dad' : 'Show Me Jokes Dad'}
                </button>
                {showDadApi && <ApiPlayground />}

                <button
                    className="text-blue-500 underline font-light text-sm p-2"
                    onClick={() => setshowCatApi(!showCatApi)}>
                    {showCatApi ? 'Thats Enough' : 'Give me cat fact'}
                </button>
                {showCatApi && <ApiPlayground url="https://catfact.ninja/fact" />}
            </div>

            <div className="p-4 flex gap-2">
                <a href="/form" className="text-blue-500 underline font-light text-sm">
                    Go to Form Page
                </a>
                <a href="/about" className="text-blue-500 underline font-light text-sm">
                    Go to About Page
                </a>
                <a href="/callback" className="text-blue-500 underline font-light text-sm">
                    Go to Callback Page
                </a>
            </div>

            <div className="p-4 flex gap-2 items-center">
                <SButton size="small" className="rounded">small</SButton>
                <SButton className="rounded">Medium</SButton>
                <SButton size="large" className="rounded">Large</SButton>
            </div>
            <div className="p-4 flex gap-2 items-center">
                <SButton variant="primary" className="rounded">Primary</SButton>
                <SButton variant="secondary" className="rounded">Secondary</SButton>
                <SButton variant="tertiary" className="rounded">Tertiary</SButton>
                <SButton variant="danger" className="rounded">Danger</SButton>
            </div>
            <div className="p-4 flex gap-2 items-center flex-wrap">
                {products.map((product) => (
                    <SCard 
                        key={product.name}
                        imageSrc={product.imageSrc}
                        title={product.name}
                        subtitle={`$${product.price.toFixed(2)}`}
                        onClick={() => dispatch({ type: 'ADD_ITEM', payload: { name: product.name, price: product.price } })}
                    >
                        <button 
                            className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch({ type: 'ADD_ITEM', payload: { name: product.name, price: product.price } })
                            }}
                        >
                            Add to Cart
                        </button>
                    </SCard>
                ))}
            </div>

            {/* Cart Display */}
            <div className="p-4 border-t">
                <h3 className="text-xl font-bold mb-4">Cart ({cart.length} items)</h3>
                {cart.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty</p>
                ) : (
                    <div className="space-y-2">
                        {cart.map((item, index) => (
                            <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <span>{item.name}</span>
                                <div className="flex items-center gap-4">
                                    <span className="font-bold">${item.price.toFixed(2)}</span>
                                    <button
                                        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: index })}
                                        className="text-red-500 hover:text-red-700 text-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-between items-center pt-2 border-t font-bold text-lg">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                )}
            </div>

            <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Proceed to Checkout
            </Link>
        </div>
    )
}

export default Index