import axios from "axios"; 

export const getProducts = (page = 1 ) => {
    const response = axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=2a235b91059bbee0cb0dad81130d7beb&page=${page}&language=en-US`
      );
      return response
  }
  
  export const getProductsFilter = (query,page =1 ) => {
    const response = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2a235b91059bbee0cb0dad81130d7beb&language=en-US&page=${page}&include_adult=false&query=${query}`
      );
      return response
  }

  export const getProductsById = (id ) => {
    const response = axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2a235b91059bbee0cb0dad81130d7beb&language=en-US`
      );
      return response
  }

  export const getProductsByIdCast = (id ) => {
    const response = axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=2a235b91059bbee0cb0dad81130d7beb&language=en-US`
      );
      return response
  }

  export const getProductsByIdReviews = (id ) => {
    const response = axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=2a235b91059bbee0cb0dad81130d7beb&language=en-US`
      );
      return response
  }

  //en-US


  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=2a235b91059bbee0cb0dad81130d7beb&language=en-US
  //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
  //https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
  