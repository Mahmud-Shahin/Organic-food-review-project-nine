import React from 'react';

const Review = (props) => {
    const { picture, name, description, rating } = props.review
    return (


        <div class="card-group">
            <div class="card">
                <img src={picture} class="card-img-top" alt="..." />
                <div class="card-body">

                    <h5 class="card-title">name : {name}</h5>
                    <p class="card-text">{description}</p>
                    <p class="card-text"><small >rating: {rating}</small></p>
                </div>
            </div>


            {props.children}
        </div>
    );
};

export default Review;