import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import MovieItemFull from '../movieItem/MovieItemFull';
import About from '../../pages/About'


export default class Main extends Component {
  state = {};
  render() {
    return (
      <>
      <Suspense fallback={<h2>Loading ...</h2>}>
        <Switch>
          <Route path="/" exact component={Home}  /* webpackChunkName: "Home"*//>
          <Route path="/movies/:id" component={MovieItemFull} /* webpackChunkName: "MovieItemFull"*/ />
          <Route path="/movies" component={Movies} /* webpackChunkName: "Movies"*/ />
          <Route path="/about" component={About} /* webpackChunkName: "About"*/ />
        </Switch>
        </Suspense>
      </>
    );
  }
}
