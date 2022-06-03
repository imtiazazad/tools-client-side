import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {name, _id} = tool;
    const navigate = useNavigate();
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={tool.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <button onClick={()=> navigate(`/purchase/${_id}`)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;