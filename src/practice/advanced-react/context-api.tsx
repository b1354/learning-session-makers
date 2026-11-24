import { createContext } from "react";

interface ICart {
    name: string
    price: number
    imageSrc?: string
}

interface CartContextType {
    cart: ICart[]
    addToCart: (item: ICart) => void
    removeFromCart: (index: number) => void
}

export const CartContext = createContext<CartContextType>({ 
    cart: [], 
    addToCart: () => {},
    removeFromCart: () => {}
})
