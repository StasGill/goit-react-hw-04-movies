import axios from "axios"; 

export const getProducts = (page = 1 ) => {
    const response = axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=2a235b91059bbee0cb0dad81130d7beb&page=${page}&language=ru`
      );
      return response
  }
  
  export const getProductsFilter = (query,page = 1 ) => {
    const response = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2a235b91059bbee0cb0dad81130d7beb&language=ru&page=${page}&include_adult=false&query=${query}`
      );
      return response
  }

  export const getProductsById = (id,params = '' ) => {
    const response = axios.get(
        `https://api.themoviedb.org/3/movie/${id}${params}?api_key=2a235b91059bbee0cb0dad81130d7beb&language=ru`
      );
      return response
  }

  export const getProductsByIdCast = (id ) => {
    const response = axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=2a235b91059bbee0cb0dad81130d7beb&language=ru`
      );
      return response
  }

  export const getProductsByIdReviews = (id ) => {
    const response = axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=2a235b91059bbee0cb0dad81130d7beb&language=en-US`
      );
      return response
  }
  export const getProductsTV = (page = 1 ) => {
    const response = axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=2a235b91059bbee0cb0dad81130d7beb&language=ru&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false`
      );
      return response
  }

  //en-US


  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=2a235b91059bbee0cb0dad81130d7beb&language=en-US
  //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
  //https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
  //https://api.themoviedb.org/3/discover/tv?api_key=2a235b91059bbee0cb0dad81130d7beb&language=ru&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false
  