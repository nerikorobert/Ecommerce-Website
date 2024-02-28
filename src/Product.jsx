import React, { Component } from "react";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.product.id,
            productName: this.props.product.productName,
            price: this.props.product.price,
            product: this.props.product, // Include the entire product object in state
        };
    }

    render() {
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted">
                            #{this.state.id}
                            <span className="pull-right hand-icon"
                                onClick={() => {
                                    this.props.onDelete(this.state.product);
                                }}

                            >
                                <i className="fa fa-times"></i>
                            </span>
                        </div>
                        <h5 className="p-2 border-top">
                            {this.state.productName}</h5>

                        <div>$ {this.state.price}</div>
                    </div>
                    <div className="card-footer">
                        <div className="float-left">
                            <span className="badge">{this.state.product.quantity}</span>
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={() => { this.props.onIncrement(this.state.product, 10); }}>+</button>
                                <button className="btn btn-outline-success" onClick={() => { this.props.onDecrement(this.state.product, 0); }}>-</button>
                            </div>
                        </div>
                        <div className="float-right">{this.props.children} </div>
                    </div>
                </div>
            </div>
        );
    }
}
