import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Tools from './Tools';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Tools/>
        </div>
    );
};

export default Home;