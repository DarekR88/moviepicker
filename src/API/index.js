import axios from "axios";

export const testSearch = (year) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=805e6e3607d3f594b155862e71830dd2&year=${year}&language=en-US&sort_by=popularity.desc`
    )
};

export const multiSearch = (term) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=805e6e3607d3f594b155862e71830dd2&language=en-US&page=1&include_adult=false&query=${term}`
    )
};
