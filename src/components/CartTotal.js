import React from 'react';
import { Link } from 'react-router-dom';

export default function CartColumns({ value }) {
    const { cartSubtotal, cartTax, cartTotal, clearCart } = value; //diambil dari context.js
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart}>
                                Clear Cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal :</span>
                            <strong>Rp. {cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">tax :</span>
                            <strong>Rp. {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">subtotal :</span>
                            <strong>Rp. {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};