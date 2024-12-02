import React from "react"
import { useShoppingCart } from "../context/ShoppingCartContext.tsx"
import storeItems from '../data/items.json'
import { Stack } from "react-bootstrap"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity} : CartItemProps) {
    const { removeFromtCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item === null) return null

    return (
        <Stack direction="horizontal" gap={2}>
            <img src={item.imageUrl} style={{ width:"125px", 
                                              height:"75px",
                                              objectFit:"cover"}}/>

        </Stack>
    )

}