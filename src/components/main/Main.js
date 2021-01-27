import React, { Component, lazy , Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from '../../pages/Home';
// import Movies from '../../pages/Movies';
// import MovieItemFull from '../movieItem/MovieItemFull';
// import About from '../../pages/About'

const AsyncComponentHome = lazy(() => import('../../pages/Home'));
const AsyncComponentMovieItem = lazy(() => import('../movieItem/MovieItemFull'));
const AsyncComponentMovie = lazy(() => import('../../pages/Movies'));
const AsyncComponentAbout = lazy(() => import('../../pages/About'));

export default class Main extends Component {
  state = {};
  render() {
    return (
      <>
      <Suspense fallback={<h2>Loading ...</h2>}>
        <Switch>
         <Route path="/" exact component={AsyncComponentHome} />
         <Route path="/movies/:id" component={AsyncComponentMovieItem} />
         <Route path="/movies" component={AsyncComponentMovie} />
         <Route path="/about" component={AsyncComponentAbout}  />
        </Switch>
        </Suspense>
      </>
    );
  }
}


