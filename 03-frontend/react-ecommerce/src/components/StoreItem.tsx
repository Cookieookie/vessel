import React from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency.tsx";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";


type StoreItemProps = {
    id: number
    sku: string
    name: string
    description: string
    unitPrice: number
    imageUrl: string
}

export function StoreItem ({ id, sku, name, description, unitPrice, imageUrl}:StoreItemProps
) {
    // placeholder variable to test when cart is empty vs has items for checkout
    const { 
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart 
        } = useShoppingCart()
    const quantity = 0
    return (
    
    <Card className="h-100">
        <Card.Img 
        variant="top" 
        src= {imageUrl} 
        height="200px" 
        style={{objectFit: "contain"}} 
        />

        <Card.Body className="d-flex flex-column">
            <Card.Title className = "d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-5">{name}</span>
                <span className="ms-2 text-muted">{ formatCurrency(unitPrice) }</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                        <Button className="w-100 btn-info">+ Add To Cart</Button>
                    ) : (
                        <div 
                            className="d-flex align-items-center flex-column" 
                            style={{ gap: ".5rem" }}
                        >
                        <div 
                            className="d-flex align-items-center justify-content-center" 
                            style={{ gap: ".5rem" }}
                        >
                        {/* Increase or Decrease quantitiy of item */}
                            <Button>-</Button>
                            <span className="fs-3"> {quantity} </span>
                            <Button>+</Button>
                        </div>

                        {/* Remove item from cart */}
                            <Button variant="danger" size="sm">Remove</Button>

                        </div>
                         )}
    </div>
        </Card.Body>
    </Card>
    )
}