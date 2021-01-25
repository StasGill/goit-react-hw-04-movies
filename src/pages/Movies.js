import React, { Component } from 'react';
import SearchPanel from '../components/searchPanel/SeatchPanel';
import MovieItem from '../components/movieItem/MovieItem';
import style from './Home.module.css';
import LoadMore from '../components/button/LoadMore';
import { getProductsFilter } from '../api/api';
import queryString from 'query-string'
import Loader from "react-loader-spinner";


export default class Movies extends Component {
  state = {
    searchQuery: '',
    filtered: [],
    currentPage: 1,
    loading: false
  };

  componentDidMount(){
    const {query} = queryString.parse(this.props.location.search)
     if(query){
        getProductsFilter(query).then(data =>
            this.setState({ filtered: [...data.data.results] }))
     }else{
      getProductsFilter('Love').then(data =>
        this.setState({ filtered: [...data.data.results] }))
     }
     

  }
  componentDidUpdate(prevProps, prevState){
    // const {query: prevQuery} = queryString.parse(prevProps.location.search)
    // const {query: nextQuery} = queryString.parse(this.props.location.search)
    
}

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  onSubmit = (e, page = 1) => {
    e.preventDefault();
    this.setState({ loading: true });
    const searchQ = this.state.searchQuery;
    this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${searchQ}`
    })
    getProductsFilter(searchQ).then(data =>
      this.setState({ filtered: [...data.data.results] }),
    );
    this.setState({ loading: false });
  };

  loadMore = () => {
    const searchQQ = this.state.searchQuery;
    getProductsFilter(searchQQ, this.state.currentPage + 1).then(data =>
      this.setState(prev => ({
        filtered: [...prev.filtered, ...data.data.results],
        currentPage: prev.currentPage + 1,
      })),
    );
  };

  onClick = e => {
    const targetId = e.target.closest('[data-id]').dataset.id;
    this.props.history.push({
      pathname: `/movies/${targetId}`,
      state: { id: targetId },
    });
  };

  render() {
    return (
      <>
        <SearchPanel
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={this.state.searchQuery}
        />
        {this.state.loading && <div className={style.loaderContainer}><Loader type="ThreeDots" color="#00BFFF" height={200} width={200} /></div>}
        <ul className={style.movieList}>
          {this.state.filtered.map(items => (
            <MovieItem items={items} key={items.id} onClick={this.onClick} />
          ))}
        </ul>
        {this.state.filtered.length >1 && <LoadMore onClick={this.loadMore} />}
      </>
    );
  }
}
