import React, { Component } from 'react';

const ProductProvider = React.createContext();

class ProductProvider extends Component {
    render() {
        return (
            <ProductProvider.Provider value="Helo context">
                {this.props.children}
            </ProductProvider.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };