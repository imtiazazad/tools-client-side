import React from 'react';

const ContactUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w shadow-2xl bg-base-100 p-10">
                    <h2 className='text-primary text-xl text-center'>Contact Us</h2>
                    <h3 className='text-4xl'>Stay Connected With Us</h3>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label lg:max-w-lg">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;