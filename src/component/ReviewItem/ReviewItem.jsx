import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {
    const {img, id, name, price, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-txt'>${price}</span></p>
                <p>Order Quantity: <span className='orange-txt'>{quantity}</span></p>
            </div>
            <button className='btn-delete'>D</button>
        </div>
    );
};

export default ReviewItem;