import React, { useState, useEffect } from 'react';
import style from './MovieItemFull.module.css';
import {
  getProductsById,
  getProductsByIdCast,
  getProductsByIdReviews,
} from '../../api/api';
import Credits from '../credits/Credits';
import Reviews from '../reviews/Reviews';
import Loader from 'react-loader-spinner';

const initialState = {
  movie: [],
  cast: null,
  reviews: null,
  loading: false,
  error: false,
};

const MovieItemFull = ({ location, match, history }) => {
  const [state, setState] = useState({ ...initialState });
  const posterQuery = 'https://image.tmdb.org/t/p/w300/';

  useEffect(() => {
    setState({ loading: true });
    
    const movieId = match.params.id;
    
    getProductsById(movieId)
      .then(item => setState({ movie: { ...item.data } }))
      .catch(() => setState({ error: true }));
    
      setState({ loading: false });
  }, []);
  
  useEffect(() => {
    window.scrollTo({
      // top: document.documentElement.scrollHeight,
      top: 580,
      behavior: 'smooth',
    });
  }, [state.cast]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [state.reviews]);

  function onClickCast() {
    history.push({
      pathname: location.pathname,
      search: `query=cast`,
    });
    const movieId = match.params.id;
    getProductsByIdCast(movieId).then(
      data => setState(prev => ({ ...prev, cast: [...data.data.cast] })),
      // console.log(data.data.cast)
    );
  }

  function onClickReviews() {
    history.push({
      pathname: location.pathname,
      search: `query=review`,
    });

    const movieId = match.params.id;
    getProductsByIdReviews(movieId).then(
      data => setState(prev => ({ ...prev, reviews: [...data.data.results] })),
      // console.log(data.data.results)
    ).catch(() => console.log());;
  }

  return (
    <>
      {state.loading && (
        <div className={style.loaderContainer}>
          <Loader type="ThreeDots" color="#00BFFF" height={200} width={200} />
        </div>
      )}

      {state.movie && (
        <div className={style.listItem}>
          <div>
            <img
              src={posterQuery + state.movie.poster_path}
              className={style.listItemImg}
              alt=""
            />
          </div>
          <div>
            <h3>{state.movie.title}</h3>
            <p>
              <b>Date:</b>{' '}
              {state.movie.first_air_date
                ? state.movie.first_air_date
                : state.movie.release_date}
            </p>
            <p> <b> Vote: </b> {state.movie.vote_average}</p>
            <p>{state.movie.overview}</p>
            <div className={style.ButtonContainer}>
              <button className={style.Button} onClick={onClickCast}>
                Credits
              </button>
              <button className={style.Button} onClick={onClickReviews}>
                Reviews
              </button>
            </div>
          </div>
        </div>
      )}
      {state.error && <h1 className={style.headerNotFound}>Movie Not Found</h1>}
      <ul className={style.movieList}>
        {state.cast && state.cast.map(item => <Credits cast={item} key={item.id}/>)}
      </ul>
      <ul className={style.movieListReview}>
        {state.reviews && state.reviews.map(item => <Reviews cast={item} key={item.id}/>)}
      </ul>
      {/* {!state.reviews && <h1 className={style.headerNotFound}>No Reviews</h1> } */}
    </>
  );
};

export default MovieItemFull;
