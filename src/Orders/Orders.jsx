import React, { useState } from 'react';
import Cart from '../component/Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../component/Product/Product';
import ReviewItem from '../component/ReviewItem/ReviewItem'
import './Order.css'
import { removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    console.log(savedCart);
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromCart = {handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={savedCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;