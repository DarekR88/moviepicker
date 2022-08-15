import axios from "axios";

export const testSearch = () => {
  axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=805e6e3607d3f594b155862e71830dd2&year=1999"
    )
    .then((res) => {
      console.log(res);
    });
};
