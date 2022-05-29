import React, { useEffect, useState } from 'react';
import Product from './Product';

const AvailableProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/allProducts')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    console.log(products)
    return (
        <div>
            <h2 className='text-xl text-primary text-center'>Available Products</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AvailableProducts;