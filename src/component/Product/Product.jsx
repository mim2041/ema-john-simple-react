import React from 'react';
import './Product.css';

const Product = (props) => {
    const {id, img, name, ratings, seller, quantity, price} = props.product;
    return (
        <div className='product-container'>
            <div className='product'>
                <img src={img} alt=""/>
                <div className="product-info">
                    <h6 className='product-name'>{name}</h6>
                    <p>Price: ${price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings} stats</p>
                </div>
                <button className='btn-cart'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;