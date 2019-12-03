import React from 'react';

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increase, decrease, removeItem } = value; //Dari Context.js
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={require('../' + img)}
                    style={{ width: "5rem", height: "5rem" }}
                    className="img-fluid"
                    alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product :</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price :</span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrease(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increase(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fa fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong className="d-lg-none">item total : {total}</strong><strong>Rp. {total}</strong>
            </div>
        </div>
    );
}