import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// vai check the ui all is working or not


const Purchase = () => {
    const [singleProduct,setSingleProduct]=useState({})
    const {_id: id} = useParams();
    
    useEffect(()=>{
        const url = `http://localhost:5000/singleProduct?id=${id}`
        fetch(url).then(res=>res.json()).then(data=>setSingleProduct(data))
    },[id])
    console.log(singleProduct)
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={singleProduct?.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {singleProduct?.name}</h2>
                <p>Available Tool: </p>
                <div className="card-actions justify-center">
                </div>
            </div>
        </div>
    );
};

export default Purchase;