import React, { useState } from 'react';
import Cart from '../component/Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../component/Product/Product';
import ReviewItem from '../component/ReviewItem/ReviewItem'
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    console.log(savedCart);
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
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
                <Cart 
                cart={cart}
                handleClearCart = {handleClearCart}
                >
                    <Link className='proceed-link' to="/checkout">
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;