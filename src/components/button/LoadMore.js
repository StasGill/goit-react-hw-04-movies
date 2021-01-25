import React from 'react'
import style from './LoadMore.module.css'


const Button = ({onClick}) => {
    return (
        <button className={style.Button} onClick={onClick}>Load more</button>
    );
}

export default Button;