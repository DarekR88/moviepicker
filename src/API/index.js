import axios from "axios";

export const testSearch = (year) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=805e6e3607d3f594b155862e71830dd2&year=${year}`
    )
    // .then((res) => {
    //   console.log(res.data.results[0]);
    // });
};
