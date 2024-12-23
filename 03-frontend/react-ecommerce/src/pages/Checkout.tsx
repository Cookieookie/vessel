import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import $ from 'jquery';




export function Checkout() {
    return (
    <div>
    <h1>Checkout</h1>
    
    <div class="container">

        <div class="row">

            <div class="col-md-8 order-md-1">
                    <h2>Billing Address</h2>
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
                            <input type ="text" className="form-control" id="country"></input>
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
                    <hr class="mb-4"/>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="form-check-input" id="same-address"></input>
                            <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                        </div>
                    <hr class="mb-4"/>
                    <div>
                        <h2>Payment</h2>

                        <div class="form-check my-3">
                            <div class="custom-control custom-radio">
                                <input id="credit" name="pyamentMethod" type="radio" class="form-check-input" checked required></input>
                                <label class="form-check-label" for="credit">Credit card</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="debit" name="pyamentMethod" type="radio" class="form-check-input" checked required></input>
                                <label class="form-check-label" for="debit">Debit card</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="paypal" name="pyamentMethod" type="radio" class="form-check-input" checked required></input>
                                <label class="form-check-label" for="paypal">Paypal</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="cc-name">Name on card</label>
                                <input type="text" class="form-control" id="cc-name" placeholder required></input>
                                    <small class="text-muted">Full name as displayed on card</small>
                                    <div class="invalid-feedback">Name on card is required</div>
                            </div>

                            <div class="col-md-6 mb-3">
                                <label for="cc-number">Card Number</label>
                                <input type="text" class="form-control" id="cc-numbert" placeholder required></input>
                                    <div class="invalid-feedback">Credit/Debit card number is required</div>
                            </div>
                        </div>

                        <div class="row">
                        <div class="col-md-6 mb-3">
                                <label for="cc-expiration">Expiration</label>
                                <input type="text" class="form-control" id="cc-expiration" placeholder required></input>
                                    <div class="invalid-feedback">Expiration date required</div>
                            </div>

                            <div class="col-md-6 mb-3">
                                <label for="cc-cvv">CVV</label>
                                <input type="text" class="form-control" id="cc-cvv" placeholder required></input>
                                    <div class="invalid-feedback">Security code required</div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>

            <div class="col-md-4 order-md-2 mb-4">
                <h2>Cart</h2>
                <ul class="listr-group mb-3">
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
            </div>
        </div>


    </div>
    
    
    
    </div>
    )
}