import React from 'react';
import tools from '../../media/images/tools.jpg'

const ProductsBanner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={tools} alt='tools' className="max-w-sm rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default ProductsBanner;