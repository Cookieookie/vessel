import React from "react";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency.tsx";

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
    return (
    
    <Card>
        <Card.Img 
        variant="top" 
        src= {imageUrl} 
        height="200px" 
        style={{objectFit: "contain"}} 
        />

        <Card.Body className="d-flex flex-column">
            <Card.Title className = "d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{ formatCurrency(unitPrice) }</span>
            </Card.Title>
        </Card.Body>
    </Card>
    )
}