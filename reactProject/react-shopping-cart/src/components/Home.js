import React, { useState } from 'react';
import iphoneSE2 from '../image/iphoneSE2.jpg';
import iphoneXR from '../image/iphoneXR.jpg';
import iphone12 from '../image/iphone12.jpg';
import iphone12PRM from '../image/iphone12PRM.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {

    console.log(props);

    return (
        <div className="container">
            <div className="image">
                <img src={iphoneSE2} alt="Iphone SE 2" />
                <h3>Iphone SE 2</h3>
                <h3>$600</h3>
                <a onClick={ () => props.addBasket('iphoneSE2')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={iphoneXR} alt="Iphone XR" />
                <h3>Iphone XR</h3>
                <h3>$650</h3>
                <a onClick={ () => props.addBasket('iphoneXR')} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={iphone12} alt="Iphone 12" />
                <h3>Iphone 12</h3>
                <h3>$900</h3>
                <a onClick={ () => props.addBasket('iphone12')} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={iphone12PRM} alt="Iphone 12 Pro Max" />
                <h3>Iphone 12 Pro Max</h3>
                <h3>$1000</h3>
                <a onClick={ () => props.addBasket('iphone12PRM')} className="addToCart cart4" href="#">Add to Cart</a>
            </div>
        </div>
    );
}

export default connect(null, { addBasket })(Home);