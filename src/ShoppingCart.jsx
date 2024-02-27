import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
    state = {
        products: [
            { id: 1, productName: "Iphone", price: 8900, quantity: 0 },
            { id: 2, productName: "Sony camera", price: 4500, quantity: 0 },
            { id: 3, productName: "Sumsung QLED TV", price: 7900, quantity: 0 },
            { id: 4, productName: "Ipad pro", price: 8900, quantity: 0 },
            { id: 5, productName: "Xbox", price: 9100, quantity: 0 },
            { id: 6, productName: "Dell Monitor", price: 880, quantity: 0 },
        ],
    };
    render() {
        return (
        <div className="container-fluid">

            <h4>Shopping Cart</h4>
            <div className="row">
                {this.state.products.map((prod) => {
                    return <Product key={prod.id} id={prod.id}
                        productName={prod.productName} price={prod.price} />;
                })}
            </div>
        </div>
        )
    }
}