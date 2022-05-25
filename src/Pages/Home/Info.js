import React from 'react';
import InfroCard from './InfroCard';
import clock from '../../media/icon/clock.svg'
import marker from '../../media/icon/marker.svg'
import phone from '../../media/icon/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfroCard cardTitle='Opening Hours'  bgClass="bg-[#0369a1]" img={clock} ></InfroCard>
            <InfroCard cardTitle='Our Locations' bgClass='bg-[#0369a1]' img={marker}></InfroCard>
            <InfroCard cardTitle='Contact Us' bgClass='bg-[#0369a1]' img={phone}></InfroCard>
        </div>
    );
};

export default Info;