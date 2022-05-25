import React from 'react';
import Footer from '../Shared/Footer';
import AvailableProducts from './AvailableProducts';
import ProductsBanner from './ProductsBanner';

const Products = () => {
    return (
        <div className='px-12'>
            <ProductsBanner/>
            <AvailableProducts/>
            <Footer/>
        </div>
    );
};

export default Products;