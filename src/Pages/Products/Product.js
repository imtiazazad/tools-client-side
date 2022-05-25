import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Product = ({product, setBuy}) => {
    const navigate = useNavigate();
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>Available Tool: {product.amount}</p>
                <div className="card-actions">
                   
                    <button onClick={()=> navigate(`/purchase`)} className="btn btn-primary">Buy Now</button>
                  
                </div>
            </div>
        </div>
    );
};

export default Product;