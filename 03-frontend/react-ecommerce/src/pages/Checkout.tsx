import React from "react";
import { Button, Card, Form } from "react-bootstrap";



export function Checkout() {
    return (
    <div>
    <h1>Checkout</h1>
    
    <h2>Billing Address</h2>
    
    <div>
        <Form>
            <div className="billingInfo">
                <label>First name<input type="text" name="first-name"></input></label>
            </div>
        </Form>
    </div>
    
    
    
    </div>
    )
}