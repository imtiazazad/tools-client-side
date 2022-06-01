import React from 'react';
import mechanic from '../../media/images/mechanic.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-300">
  <div className="">
    <img src={mechanic} height={"600px"} width={'600px'}/>
    <div>
      <h1 className="text-5xl font-bold">The Best Electric Tools!</h1>
      <p className="py-6 text-center">Tools are vital to all commercial tradesmen and domestic users undertaking projects at home. Without a good tool shop it would be difficult to complete both simple and more complex construction or home improvements. Anyone serious about manual labour would need the basic tools for trade and can progressively invest in additional equipment and accessories as jobs require it.</p>
    </div>
  </div>
</div>
    );
};

export default About;