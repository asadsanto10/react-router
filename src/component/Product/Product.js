import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Product.scss'

const Product = (props) => {
    // console.log(props.product.key);
    console.log(props);
    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className="single-product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <div className="product-header">
                    {
                        props.showAddToCart === true ? <h3><Link to={"/product/" + key}>{name}</Link></h3> : <h3>{name}</h3>
                    }

                    <p><small>by: </small>{seller}</p>
                </div>
                <div className="product-info">
                    <p>${price}</p>
                    <p><small>only {stock} left in stock - order soon</small></p>
                    {props.showAddToCart === true && <button onClick={() => props.handelProduct(props.product)} className="add-cart"> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
                </div> 
            </div>
        </div>
    );
};

export default Product;