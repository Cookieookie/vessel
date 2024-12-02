import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContextType = {
    //5 functions - open cart, close cart, see item quantity, add/sub quantity of an item, fully remove item
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext  = createContext({} as ShoppingCartContextType)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

// Part that renders out all the code for shopping cart sidebar
export function ShoppingCartProvider({ children } : ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)


   
   //function 1 - see item quantity
   function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
   }
   
   //function 2 - add quantity of an item to cart
   function increaseQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        }) 
   }
   
   //function 3 - decrease quantity of an item to cart
   function decreaseQuantity(id: number) {
    setCartItems(currItems => {
        if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
        } else {
            return currItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 }
                } else {
                    return item
                }
            })
        }
    }) 
   }

   //function 4 - remove item from cart
   function removeFromCart(id: number) {
    setCartItems(currItems => {
        return currItems.filter(item => item.id !== id)
    })
   }
   
    return (
        <ShoppingCartContext.Provider 
        value= {{ 
            getItemQuantity, 
            increaseQuantity, 
            decreaseQuantity, 
            removeFromCart,
            cartItems,
            cartQuantity,
            openCart,
            closeCart
            }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}