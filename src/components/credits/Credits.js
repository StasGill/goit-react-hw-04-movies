import React from 'react';

import style from './Credits.module.css'


const Credit = ({ cast }) => {
  const posterQuery = 'https://image.tmdb.org/t/p/w300/';

return (
    <>
    {cast.profile_path && (<li className={style.listItem}>
        <img src={posterQuery + cast.profile_path} className={style.imgItem} alt=''/>
        <p className={style.pItem}>{cast.name}</p>
      </li>)}
      
    </>
  );
};

export default Credit;
