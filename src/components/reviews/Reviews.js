import React from 'react';

import style from './Reviews.module.css';

const Reviews = ({ reviews = [] }) => {
 
  return (
    <>
      <ul className={style.movieListReview}>
        {reviews.map(item => (
          <li className={style.listItem} key={item.id}>
            <h3>{item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
