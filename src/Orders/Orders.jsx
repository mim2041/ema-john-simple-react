import React from 'react';
import Cart from '../component/Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../component/Product/Product';
import ReviewItem from '../component/ReviewItem/ReviewItem'
import './Order.css'

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;