import React from 'react';

import style from './Credits.module.css';

const Credit = ({ casts = [] }) => {
  const posterQuery = 'https://image.tmdb.org/t/p/w300/';

  return (
    <>
      <ul className={style.movieList}>
        {casts.map(item => ( item.profile_path &&
         <li className={style.listItem} key={item.id}>
            <img
              src={posterQuery + item.profile_path}
              className={style.imgItem}
              alt=""
            />
            <p className={style.pItem}>{item.name}</p>
          </li>
           
          
        ))}
      </ul>
    </>
  );
};

export default Credit;
