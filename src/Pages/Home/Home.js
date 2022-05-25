import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import Footer from '../Shared/Footer';
import Info from './Info';
import Reviews from './Reviews';
import Tools from './Tools';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Tools/>
            <BusinessSummary/>
            <Reviews/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;