import React, { useState } from 'react';
import fackeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.scss'


const Shop = () => {
    const first10 = fackeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCurt] = useState([]);

    const handelProduct = (pd) => {
        // console.log('added', pd);
        const newCart = [...cart, pd];
        setCurt(newCart);
    }

    return (
        <div className="shop-container">
            <div className="prodect-container">
                {
                    products.map(product => <Product showAddToCart={true} key={product.key} product={product} handelProduct={handelProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;