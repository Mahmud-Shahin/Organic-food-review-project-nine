import React from 'react';
import UseReviews from '../Hook/UseReviews';
import ReviewItems from '../ReviewItems/ReviewItems';

const AllReviews = () => {
    const [reviews, setReviews] = UseReviews()
    console.log(reviews)
    return (

        <div className='Home-container container mt-5'>

            {
                reviews.map(review => <ReviewItems
                    key={review.id}
                    review={review}
                ></ReviewItems>)
            }

        </div>
    );
};

export default AllReviews;