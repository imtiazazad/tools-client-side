import React from 'react';
import { useParams } from 'react-router-dom';



const Purchase = ({product}) => {
    const {_id} = useParams();
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product?.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {product?.name}</h2>
                <p>Available Tool: </p>
                <div className="card-actions justify-center">
                </div>
            </div>
        </div>
    );
};

export default Purchase;