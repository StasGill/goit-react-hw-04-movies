import React from 'react';
import style from './MovieItem.module.css';
import {  NavLink,Link, useLocation } from "react-router-dom";

const MovieItem = ({ items, onClick,loc }) => {
  const posterQuery = 'https://image.tmdb.org/t/p/w300/';

  
     
  return (
    <Link to={{
      pathname: `/movies/${items.id}`,
      state: { from: loc },
    }}>
    <li
      className={style.listItem}
      key={items.id}
      onClick={onClick}
      data-id={items.id}
    >
      <img
        src={posterQuery + items.poster_path}
        className={style.listItemImg}
        alt=""
      />
      <h3 className={style.listItemHeader}>{items.original_name}</h3>
      <h3 className={style.listItemHeader}>{items.original_title}</h3>
    </li>
    </Link>

    
  );
};

export default MovieItem;
