import React from 'react';

import style from './Reviews.module.css';

const Reviews = ({ reviews = [] }) => {
  return (
    <>
      <ul className={style.movieListReview}>
        {reviews.length > 0 ? (
          reviews.map(item => (
            <li className={style.listItem} key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <h2>Отзывов нет(</h2>
        )}
      </ul>
    </>
  );
};

export default Reviews;
