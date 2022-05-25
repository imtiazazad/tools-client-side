import React from 'react';
import fluke from '../../media/images/fluke.jpg';
import Tool from './Tool';

const Tools = () => {
    const tools = [
        {
            _id: 1, 
            name: 'Fluke AC/DC Insulation/ Resistance Tester 1000V (',
            descrption: 'Compact, rugged and easy to use, hand-held digital insulation tester with multiple test voltages. Includes remote test probe for repetitive testing and hard to reach areas. CAT IV 600V,1000V Insulation Tester,20.00 to 20.00kΩ Continuity Testing,0.01-20Ω Resistance,Real-Time Read-Out,Audible Tone,Digital Display,AC/DC Voltage & Resistance,Auto-Discharge of Capacitive Voltage',
            img: fluke
        },
        {
            _id: 2, 
            name: 'Fluke AC/DC Insulation/ Resistance Tester 1000V (',
            descrption: 'Compact, rugged and easy to use, hand-held digital insulation tester with multiple test voltages. Includes remote test probe for repetitive testing and hard to reach areas. CAT IV 600V,1000V Insulation Tester,20.00 to 20.00kΩ Continuity Testing,0.01-20Ω Resistance,Real-Time Read-Out,Audible Tone,Digital Display,AC/DC Voltage & Resistance,Auto-Discharge of Capacitive Voltage',
            img: fluke
        },
        {
            _id: 3, 
            name: 'Fluke AC/DC Insulation/ Resistance Tester 1000V (',
            descrption: 'Compact, rugged and easy to use, hand-held digital insulation tester with multiple test voltages. Includes remote test probe for repetitive testing and hard to reach areas. CAT IV 600V,1000V Insulation Tester,20.00 to 20.00kΩ Continuity Testing,0.01-20Ω Resistance,Real-Time Read-Out,Audible Tone,Digital Display,AC/DC Voltage & Resistance,Auto-Discharge of Capacitive Voltage',
            img: fluke
        }
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h3 className='text-primary text-xl font-bold uppercase'>Our Electric Tools</h3>
            <h2 className='text-4xl'>Tools That will Be Useful</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    tools.map(tool => <Tool
                    key={tool._id}
                    tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;