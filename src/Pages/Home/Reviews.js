import React from 'react';
import quote from '../../media/icon/quote.svg'
import people1 from '../../media/images/people1.png'
import people2 from '../../media/images/people2.png'
import people3 from '../../media/images/people3.png'
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id:1,
            name:'Jacob strwart',
            review: '',
            location:'New York',
            img: people1
        },
        {
            _id:2,
            name:'Ariful Islam',
            review: '',
            location: 'Bangladesh',
            img: people2
        },
        {
            _id:3,
            name:'Habib Abdullah',
            review: '',
            location:'Saudia Arabia',
            img: people3
        }
    ]
    return (
       <section>
           <div className='flex justify-between'>
            <div>
                <h4 className="text-xl text-primary font-bold">Reviews</h4>
                <h2 className='text-3xl'>What Our Customers say</h2>
            </div>
            <div>
                <img src={quote} className='w-28 lg:w-48' alt="" />
            </div>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
           </div>
       </section>
    );
};

export default Reviews;