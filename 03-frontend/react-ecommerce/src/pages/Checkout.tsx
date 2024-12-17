import React from "react";
import { Button, Card, Form } from "react-bootstrap";



export function Checkout() {
    return (
    <div>
    <h1>Checkout</h1>
    
    <h2>Billing Address</h2>
    
    <div>
        <Form>
            <div class="row mb-3">
                <div class="col">
                    <label for="firstName">First name</label>
                    <input type ="text" className="form-control" id="firstName"></input>
                </div>
                <div class="col">
                    <label for="lastName">Last name</label>
                    <input type ="text" className="form-control" id="lastName"></input>
                </div>
            </div>

            <div class="input-group mb-3">
                <label for="username">Username</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                    </div>
                <   input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>

            <div class="form-group mb-3">
                <div>
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="you@example.com"></input>
                </div>
            </div>

            <div class="form-group mb-3">
                <label for="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St"></input>
            </div>

            <div class="form-group mb-3">
                <input type="text" className="form-control" id="address" placeholder="Apartment, suite, etc. (optional)"></input>
            </div>

            <div class="row mb-3">
            <div class="col">
                    <label for="country">Country</label>
                    <select class="selectpicker countrypicker"></select>
                </div>
                <div class="col">
                    <label for="state">State</label>
                    <input type ="text" className="form-control" id="state"></input>
                </div>
                <div class="col">
                    <label for="zip">Zip</label>
                    <input type ="text" className="form-control" id="zip"></input>
                </div>
            </div>
        </Form>
    </div>
    
    
    
    </div>
    )
}