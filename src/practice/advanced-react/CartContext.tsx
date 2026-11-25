import { createContext } from "react";

interface ICart {
    name: string
    price: number
    imageSrc?: string
}

interface CartContextType {
    cart: ICart[]
    dispatch: (action: { type: string; payload?: any }) => void
}

export const CartContext = createContext<CartContextType>({ 
    cart: [],
    dispatch: () => {}
})
