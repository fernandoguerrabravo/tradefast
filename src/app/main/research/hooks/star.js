
import React from 'react';
import StarRatings from 'react-star-ratings';

export const star = (rating) => {

    return (

        <StarRatings
            rating={rating}
            starRatedColor="orange"
            starDimension="15px"
            numberOfStars={5}
            name='rating'
            starSpacing="2px"
        />
    )
}
