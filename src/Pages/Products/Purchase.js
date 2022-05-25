import React from 'react';

const Purchase = ({buy}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={buy.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {buy.name}</h2>
                <p>Available Tool: </p>
                <div className="card-actions justify-center">
                </div>
            </div>
        </div>
    );
};

export default Purchase;