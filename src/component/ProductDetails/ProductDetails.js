import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    const matcData = fakeData.find(pd => pd.key === productKey);
    console.log(matcData);
    return (
        <div>
            Your product detail
            <Product shoAddToCart={false} product={matcData}></Product>
        </div>
    );
};

export default ProductDetails;