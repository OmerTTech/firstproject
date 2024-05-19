import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('products')))

    useEffect(() => {
        localStorage.setItem('products',JSON.stringify(items))
    }, [items])

    const addToCart = (product) => {
        const existProd = items.find(item => item.id === product.id)
        if(existProd === undefined) {
            setItems([...items, product])
            toast.success('Product added')
        }
        else{
            existProd.count += 1
            setItems([...items])
            toast.success('Product already added')
        }
    }

    const removeFromCart = (id) => {
        const filteredItems = items.filter(item => item.id !== id)
        setItems(filteredItems)   
        toast.error('Product deleted from cart')
    }

    return(
        <CartContext.Provider value={{items, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }