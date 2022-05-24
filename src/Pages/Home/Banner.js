import React from 'react';
import mechanic from '../../media/images/mechanic.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-300">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={mechanic} height={"600px"} width={'600px'}/>
    <div>
      <h1 class="text-5xl font-bold">The Best Electric Tools!</h1>
      <p class="py-6">Electrical tools are specifically designed to ensure the user can safely carry out tasks or jobs such as electrical installations,</p>
      <button class="btn btn-primary bg-gradient-to-r from-indigo-500">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;