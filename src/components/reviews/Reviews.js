import React from 'react';

import style from './Reviews.module.css'


const Reviews = ({ cast }) => {
//   const posterQuery = 'https://image.tmdb.org/t/p/w300/';

return (
    <>
    {/* {cast.profile_path && (
      <li className={style.listItem}>
        <h3>{cast.author_details.name}</h3>
        <p>{cast.content}</p>
      </li>)} */}

      <li className={style.listItem}>
        <h3>{cast.author}</h3>
        <p>{cast.content}</p>
      </li>
      
    </>
  );
};

export default Reviews;