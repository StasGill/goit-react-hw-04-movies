import React, { Component } from 'react';
import style from './Home.module.css';
import { getProducts } from '../api/api';
import MovieItem from '../components/movieItem/MovieItem';
import LoadMore from '../components/button/LoadMore';
import Loader from 'react-loader-spinner';

export default class Home extends Component {
  state = { trendingFilms: [], filtered: [], currentPage: 1, loading: false };

  componentDidMount() {
    this.setState({ loading: true });
    getProducts().then(data =>
      this.setState({ trendingFilms: data.data.results }),
    );
    this.setState({ loading: false });
  }

  loadMore = () => {
    getProducts(this.state.currentPage + 1).then(data =>
      this.setState(prev => ({
        trendingFilms: [...prev.trendingFilms, ...data.data.results],
        currentPage: prev.currentPage + 1,
      })),
    );
  };

  onClick = e => {
    const targetId = e.target.closest('[data-id]').dataset.id;
    // this.props.history.push({
    //   pathname: `/movies/${targetId}`,
    //   state: { id: targetId },
    // });
  };

  render() {
    return (
      <>
        <div className={style.containerHome}>
          <div className={style.tittleContainer}></div>
          {this.state.loading && (
            <div className={style.loaderContainer}>
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={200}
                width={200}
              />
            </div>
          )}

          <ul className={style.movieList}>
            {this.state.trendingFilms.map(items => (
              <MovieItem items={items} key={items.id} onClick={this.onClick} />
            ))}
          </ul>
          <LoadMore onClick={this.loadMore} />
        </div>
      </>
    );
  }
}
