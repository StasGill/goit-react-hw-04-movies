import React, { Component, lazy , Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';



const AsyncComponentHome = lazy(() => import('../../pages/Home'));
const AsyncComponentMovieItem = lazy(() => import('../movieItem/MovieItemFull'));
const AsyncComponentMovie = lazy(() => import('../../pages/Movies'));
const AsyncComponentTv = lazy(() => import('../../pages/Tv'));
const AsyncComponentAbout = lazy(() => import('../../pages/About'));

export default class Main extends Component {
  state = {};
  render() {
    return (
      <>
      <Suspense fallback={''}>
        <Switch>
         <Route path="/" exact component={AsyncComponentHome} />
         <Route path="/movies/:id" component={AsyncComponentMovieItem} />
         <Route path="/tv" component={AsyncComponentTv} />
         <Route path="/movies" component={AsyncComponentMovie} />
         <Route path="/about" component={AsyncComponentAbout}  />
        </Switch>
        </Suspense>
      </>
    );
  }
}


