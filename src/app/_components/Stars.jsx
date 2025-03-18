'use client'

import StarRatings from "react-star-ratings";

const Stars = ({ rating = 0 }) => {
    return (
        <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="18px"
            starSpacing="1px"
            name="rating"
        />
    );
};

export default Stars;
