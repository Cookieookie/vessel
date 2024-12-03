import React from "react"
import { useShoppingCart } from "../context/ShoppingCartContext.tsx"
import storeItems from '../data/items.json'
import { Stack, Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency.tsx"


type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity} : CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item === null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            {/* Item image */}
            <img src={item.imageUrl} style={{ width:"125px", 
                                              height:"75px",
                                              objectFit:"contain"}}
        />
        <div className="me-auto">
            
            {/* Item name & quantity */}
            <div>
                {item.name} {" "} {quantity > 1 && (<span className="text-muted" style={{fontSize:".75rem"}}>
                    x {quantity}
                </span>
                )} 
            </div>

            {/* Price of item */}
            <div className = "text-muted" style={{ fontSize: ".75rem"}}>
                {formatCurrency(item.unitPrice)}
            </div>

        </div>

            {/* Total price of an item added up */}
            <div className = "text-muted" style={{ fontSize: ".75rem"}}>
                {formatCurrency(item.unitPrice * quantity )}
            </div>

            {/* Remove item */}
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)}>&times;</Button>

        </Stack>
    )

}