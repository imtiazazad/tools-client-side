import React from 'react';

const ContactUs = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card flex-shrink-0 w-full max-w shadow-2xl bg-base-100 p-10">
                    <h2 className='text-primary text-xl text-center'>Contact Us</h2>
                    <h3 className='text-4xl'>Stay Connected With Us</h3>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label lg:max-w-lg">
                                <span class="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="enter your name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="enter your email" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;