import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';


const Purchase = () => {
    const [user]=useAuthState(auth)
    const [singleProduct,setSingleProduct]=useState({})
    const { id} = useParams(); 


    
    useEffect(()=>{
        const url = `https://damp-caverns-80632.herokuapp.com/singleProduct?id=${id}`
       if(id){
        fetch(url)
        .then(res=>res.json())
        .then(data=>setSingleProduct(data))
       }
    },[id])
    const {amount , description, img, name, minimum, price}=singleProduct;
    

    const handlePlaceOrder = ()=>{
        const orderData = {
            name: user?.displayName,
            email: user?.email,
        product: name,
        }
        fetch('https://damp-caverns-80632.herokuapp.com/placeOrder', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            }
            ,
            body: JSON.stringify(orderData)
        })
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {name}</h2>
                <p>Available Tools: {amount}</p>
                <p>Minumum order quantity: {minimum}</p>
                <p>Price: {price}</p>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <button onClick={handlePlaceOrder} className='btn btn-primary'>Order Now</button>
                </div>
            </div>
        </div>
    );
};


export default Purchase;