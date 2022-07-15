import React from 'react';
import { Link } from 'react-router-dom';

import UseReviews from '../Hook/UseReviews';
import Review from '../Review/Review';
import './Home.css'
import img from './organic-Food.jpg'

const Home = () => {
    const [reviews, setReviews] = UseReviews()
    return (
        <div className='container'>
            <div className='d-flex mt-5'>
                <div className='mt-5'>
                    <h1>Organic food is food and <br />
                        drinks produced by methods</h1>
                    <p>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified <br /> organisms (GMOs). Organic foods include fresh produce, meats, and dairy products as well as processed foods such as crackers, drinks, and frozen meals.</p>
                    <button type="button" class="btn btn-outline-dark rounded">Buy now</button>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>

            <div className='container'>
                <h2>Customer review</h2>
                <div className='Home-container mt-5 mb-5'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>

                <Link to='/Review'><button type="button" class="btn btn-outline-dark rounded mb-5">Show More</button>
                </Link>



            </div>
        </div>




    );
};

export default Home;