import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';
import PropTypes from 'prop-types';

class Product extends Component {
    state = {

    }
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container p-5" onClick={() =>
                                value.handleDetail(id)
                            }>
                                <Link to={'/details'}>
                                    <img src={require('../' + img)} alt="product" className="card-img-top" />
                                </Link>
                                <button className="cart-btn" disabled={inCart ? true : false}
                                    onClick={() => {
                                        this.state.addToCart(id);
                                        this.state.openModal(id);
                                    }}
                                >
                                    {inCart ? (
                                        <p className="text-capitalize mb.0" disabled>{" "} in cart</p>
                                    ) : (
                                            <i className="fa fa-cart-plus" />
                                        )}
                                </button>
                            </div>
                        )}


                    </ProductConsumer>


                    {/* Product Footer*/}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">Rp.</span>{price}
                        </h5>

                    </div>
                </div>

            </ProductWrapper >
        );
    }
}

export default Product;
const ProductWrapper = styled.div`
.card{
    border-color :transparant;
    transition:all is linear;
}
.card.footer{
    background :transparant;
    border-top :transparant;
    transition: all is linear;
}
&:hover{
    .card{
        border : 0.04 rem solid rgba(0,0,0,0,2);
        box-shadow:2px 2px 5px 0px rgba (0,0,0,0,2);
    }
    .card-footer{
        background: transparant;
        
    }
    .img-container{
position:relative;
overflow:hidden;
    }
    .card-img-top{
        transition : all is linear;
    }
    .img-container:hover, card-img-top{
        transform:scale(1.2);
    }
    .cart-btn{
        position: absolute;
        bottom:0;
        right:0;
        padding: 0.2rem 0.4rem;
        background : var (--lightblue);
        border:none;
        color:var(--mainwhite);
        font-size:1.rem;
        border-radius:0.5rem 000;
        transform:translate(100%,100%);   
        transition:all is linear;
    }
.img-container:.cart-btn{
    transform:(0,0);
}
.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
        }
    }

}

)
`;