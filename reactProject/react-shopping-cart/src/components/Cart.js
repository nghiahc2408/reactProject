import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';

import iphoneSE2 from '../image/iphoneSE2.jpg';
import iphoneXR from '../image/iphoneXR.jpg';
import iphone12 from '../image/iphone12.jpg';
import iphone12PRM from '../image/iphone12PRM.jpg';

function Cart({ basketProps, productQuantity, clearProduct }) {
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach(function (item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if (basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    })

    // const productImages = [iphoneSE2, iphoneXR, iphone12, iphone12PRM];

    const productImages = (product) => {
        if(product.tagName ===  'iphoneSE2'){
            return iphoneSE2;
        }else if(product.tagName === 'iphoneXR'){
            return iphoneXR;
        }else if(product.tagName === 'iphone12'){
            return iphone12;
        }else if(product.tagName === 'iphone12PRM'){
            return iphone12PRM;
        }
    }

    productsInCart = productsInCart.map((product, index) => {
        console.log("My product is");
        console.log(product);
        return (
            <Fragment key={index}>
                <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={productImages(product)} />
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price}</div>
                <div className="quantity">
                    <ion-icon onClick={ () => productQuantity('decrease', product.tagName)} className="decrese" name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                    <ion-icon onClick={ () => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>

                </div>
                <div className="total">${product.numbers * product.price}</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="title sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost}</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);
