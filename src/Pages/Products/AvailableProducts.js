import React, { useEffect, useState } from 'react';
import BuyModal from './BuyModal';
import Product from './Product';

const AvailableProducts = () => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState(null);

    useEffect( () => {
        fetch('http://localhost:5000/allProducts')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    
    return (
        <div>
            <h2 className='text-xl text-primary text-center'>Available Products</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setOrders={setOrders}
                    ></Product>)
                }
            </div>
            {orders && <BuyModal orders={orders}> </BuyModal>}
        </div>
    );
};

export default AvailableProducts;