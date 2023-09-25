"use strict";

// APP: Netflix Clone
// SOLVE: Using an API pull all movies and update the application UI using response data

// Create fetchMovies function that makes a dynamic API call to what is needed

function fetchMovies(url, dom_ele, path_type) {
  // Use fetch with url
  const fetchMovies = fetch(url)
    .then((response) => response.json())
    .then((data) => {});
}

// Function that fetches Netflix originals
function getOriginals() {
  const url =
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&width_networks=213";

  // Call fetchMovies()
  fetchMovies(url, "n", "m");
}
getOriginals();
// Function that fetches trending movies
function getTrendingNow() {
  const url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";

  // Call fetchMovies function
  fetchMovies(url);
}

// Function that fetches top rated movies
function getTopRated() {
  const url =
    "https://api.themoviedb.org/3/trending/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";

  // Call fetchMovies function
  fetchMovies(url);
}
