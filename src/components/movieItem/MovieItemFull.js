import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import style from './MovieItemFull.module.css';
import {
  getProductsById,
  getProductsByIdCast,
  getProductsByIdReviews,
} from '../../api/api';
import Credits from '../credits/Credits';
import Reviews from '../reviews/Reviews';
import Loader from 'react-loader-spinner';
import { NavLink, Link, useLocation } from 'react-router-dom';

const initialState = {
  movie: [],
  cast: [],
  reviews: [],
  loading: false,
  error: false,
};

const MovieItemFull = ({ location, match, history }) => {
  const [state, setState] = useState({ ...initialState });
  const posterQuery = 'https://image.tmdb.org/t/p/w300/';

  useEffect(() => {
    setState({ loading: true });

    const movieId = match.params.id;
    const params = location.search;

    getProductsById(movieId, params)
      .then(item => setState({ movie: { ...item.data } }))
      .catch(error => setState({ error: error }));
  }, []);

  useEffect(() => {
    window.scrollTo({
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
      search: `/credits`,
    });
    const movieId = match.params.id;
    getProductsByIdCast(movieId).then(data =>
      setState(prev => ({ ...prev, cast: [...data.data.cast] })),
    );
  }

  function onClickReviews() {
    history.push({
      pathname: location.pathname,
      search: `/review`,
    });

    const movieId = match.params.id;
    getProductsByIdReviews(movieId).then(data =>
      setState(prev => ({ ...prev, reviews: [...data.data.results] })),
    );
  }

  function handleGoBack() {
    
    if (location.state.from) {
      history.push(location.state.from.pathname + location.state.from.search);
      return;
    }

    history.push({
      pathname: '/',
      search: '',
    });
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
          <button
            
            className={style.Button}
            onClick={handleGoBack}
          >
            Go Back
          </button>
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
            <p>
              {' '}
              <b> Vote: </b> {state.movie.vote_average}
            </p>
            <p>{state.movie.overview}</p>
            <div className={style.ButtonContainer}>
              <NavLink
               
                to={{
                  pathname: match.url + `/credits`,
                  state: { from: location.state.from },
                }}
                className={style.Button}
                onClick={onClickCast}
              >
                Credits
              </NavLink>
              <NavLink
                
                to={{
                  pathname: match.url + `/review`,
                  state: { from: location.state.from },
                }}
                className={style.Button}
                onClick={onClickReviews}
              >
                Reviews
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {state.error && <h1 className={style.headerNotFound}>Movie Not Found</h1>}

      <Switch>
        <Route
          path={ match.url + `/credits`}
          exact
          render={() => <Credits casts={state.cast} />}
        />
        <Route
          path={ match.url + `/review`}
          exact
          render={() => <Reviews reviews={state.reviews} />}
        />
      </Switch>
    </>
  );
};

export default MovieItemFull;


