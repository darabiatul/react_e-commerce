import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';


export const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {// Untuk menampung detail & produk nya
        products: storeProducts,
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false, //kalo true untuk nyoba menampilkan apakah berfungsi atau tidak
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
        handleDetail: this.handleDetail
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                detailProduct: product
                //  handleDetail: id
            }

        })
    }
    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        })
    }
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, handleDetail: this.state.handleDetail, addToCart: this.state.addToCart, openModal: this.state.openModal, closeModal: this.closeModal,
                increase: this.increase,
                decrease: this.decrease,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };