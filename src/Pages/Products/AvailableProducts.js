import React, { useState } from 'react';
import fluke from '../../media/images/fluke.jpg';
import Product from './Product';
import Purchase from './Purchase';

const AvailableProducts = () => {
    const [buy, setBuy] = useState(null);
    const products = [
        {
            _id: 1,
            name: 'Fluke AC/DC Insulation/ Resistance Tester 1000V (',
            descrption: 'Compact, rugged and easy to use, hand-held digital insulation tester with multiple test voltages. Includes remote test probe for repetitive testing and hard to reach areas. CAT IV 600V,1000V Insulation Tester,20.00 to 20.00kΩ Continuity Testing,0.01-20Ω Resistance,Real-Time Read-Out,Audible Tone,Digital Display,AC/DC Voltage & Resistance,Auto-Discharge of Capacitive Voltage',
            amount: 200,
            img: fluke
        },
        {
            _id: 2,
            name: 'Fluke AC/DC Insulation/ Resistance Tester 1000V (',
            descrption: 'Compact, rugged and easy to use, hand-held digital insulation tester with multiple test voltages. Includes remote test probe for repetitive testing and hard to reach areas. CAT IV 600V,1000V Insulation Tester,20.00 to 20.00kΩ Continuity Testing,0.01-20Ω Resistance,Real-Time Read-Out,Audible Tone,Digital Display,AC/DC Voltage & Resistance,Auto-Discharge of Capacitive Voltage',
            amount: 200,
            img: fluke
        },
        {
            _id: 3,
            name: 'Fluke AC/DC Insulation/ Resistance Tester 1000V (',
            descrption: 'Compact, rugged and easy to use, hand-held digital insulation tester with multiple test voltages. Includes remote test probe for repetitive testing and hard to reach areas. CAT IV 600V,1000V Insulation Tester,20.00 to 20.00kΩ Continuity Testing,0.01-20Ω Resistance,Real-Time Read-Out,Audible Tone,Digital Display,AC/DC Voltage & Resistance,Auto-Discharge of Capacitive Voltage',
            amount: 200,
            img: fluke
        },
        {
            _id: 4,
            name: 'Fluke AC/DC Insulation/ Resistance Tester 1000V (',
            descrption: 'Compact, rugged and easy to use, hand-held digital insulation tester with multiple test voltages. Includes remote test probe for repetitive testing and hard to reach areas. CAT IV 600V,1000V Insulation Tester,20.00 to 20.00kΩ Continuity Testing,0.01-20Ω Resistance,Real-Time Read-Out,Audible Tone,Digital Display,AC/DC Voltage & Resistance,Auto-Discharge of Capacitive Voltage',
            amount: 200,
            img: fluke
        },
        {
            _id: 5,
            name: 'Fluke AC/DC Insulation/ Resistance Tester 1000V (',
            descrption: 'Compact, rugged and easy to use, hand-held digital insulation tester with multiple test voltages. Includes remote test probe for repetitive testing and hard to reach areas. CAT IV 600V,1000V Insulation Tester,20.00 to 20.00kΩ Continuity Testing,0.01-20Ω Resistance,Real-Time Read-Out,Audible Tone,Digital Display,AC/DC Voltage & Resistance,Auto-Discharge of Capacitive Voltage',
            amount: 200,
            img: fluke
        },
        {
            _id: 6,
            name: 'Fluke AC/DC Insulation/ Resistance Tester 1000V (',
            descrption: 'Compact, rugged and easy to use, hand-held digital insulation tester with multiple test voltages. Includes remote test probe for repetitive testing and hard to reach areas. CAT IV 600V,1000V Insulation Tester,20.00 to 20.00kΩ Continuity Testing,0.01-20Ω Resistance,Real-Time Read-Out,Audible Tone,Digital Display,AC/DC Voltage & Resistance,Auto-Discharge of Capacitive Voltage',
            amount: 0,
            img: fluke
        },
    ];
    return (
        <div>
            <h2 className='text-xl text-primary text-center'>Available Products</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setBuy={setBuy}
                    ></Product>)
                }
            </div>
            {buy && <Purchase buy={buy}> </Purchase>}
        </div>
    );
};

export default AvailableProducts;