import React from 'react';
import photo from '../../media/images/me.jpg';
import Footer from '../Shared/Footer';

const MyPortfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={photo} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p >Name: <span className='font-bold'>Imtiaz Azad</span></p>
                        <p>Email: <span className='font-bold'>imtiaz.azad98@gmail.com</span></p>
                        <p>Educational Background: <span className='font-bold'>B.Sc in Computing and Information Systems (3rd Year)</span></p>
                        <p>list of technologies : </p>
                        <p><span className='font-bold'>1. HTML</span></p>
                        <p><span className='font-bold'>2. CSS</span></p>
                        <p><span className='font-bold'>3. Bootstrap</span></p>
                        <p><span className='font-bold'>4. Tailwind</span></p>
                        <p><span className='font-bold'>5. SASS</span></p>
                        <p><span className='font-bold'>6. Javascript</span></p>
                        <p><span className='font-bold'>7. React</span></p>
                        <p><span className='font-bold'>8. Node Js</span></p>
                        <p><span className='font-bold'>9. Express Js</span></p>
                        <p><span className='font-bold'>10. C Programming</span></p>
                        <p><span className='font-bold'>11. MongoDb</span></p>
                        <p><span className='font-bold'>12. MySql</span></p>
                        <p><span className='font-bold'>13. Github and git</span></p>
                        <p><span className='font-bold'>14. Netlify</span></p>
                        <p><span className='font-bold'>15. Firebase</span></p>
                        <p><span className='font-bold'>16. JWT</span></p>
                        <p><span className='font-bold'>17. API</span></p>
                        <p><span className='font-bold'>18. Heroku</span></p>
                    </div>
                </div>
            </div>
           
                <div class="hero-content text-center mb-10">
                    <div class="max-w-md">
                    <h1 className='font-bold text-primary text-4xl p-10'> Check my works</h1>
                    <p className='font-bold'><a href="https://travel-with-imtiaz.web.app/" target="_blank"> Project 1: Travel With Imtiaz</a></p>
                    <p className='font-bold'><a href="https://aquamarine-lokum-cdc945.netlify.app/" target="_blank"> Project 2: Product Analysis</a></p>
                    <p className='font-bold'><a href="https://iridescent-taffy-9e36dc.netlify.app/" target="_blank"> Project 3: IT Solutions</a></p>
                    </div>
                </div>
                <Footer></Footer>
            </div>
    

    );
};

export default MyPortfolio;