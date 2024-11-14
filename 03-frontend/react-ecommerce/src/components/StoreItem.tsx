import React from "react";
import { Card } from "react-bootstrap";

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
    return <Card>
        <Card.Img 
        variant="top" 
        src= {imageUrl} 
        height="200px" 
        style={{objectFit: "cover"}} />
    </Card>
}