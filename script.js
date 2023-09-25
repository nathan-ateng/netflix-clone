"use strict";

// APP: Netflix Clone
// SOLVE: Using an API pull all movies and update the application UI using response data

// Call main functions when the page is loaded
window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
};
// Create fetchMovies function that makes a dynamic API call to what is needed

function fetchMovies(url, dom_element, path_type) {
  // Use fetch with url
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      showMovies(data, dom_element, path_type);
    })
    .catch((error) => console.log(error));
}

// Functon that displays the movies to the DOM
const showMovies = (movies, dom_element, path_type) => {
  // Create a variable that grabs id or class
  let moviesEl = document.querySelector(dom_element);

  // Loop through movies object
  for (let movie of movies.results) {
    let imageElement = document.createElement("img");

    // Set attributes
    imageElement.setAttribute("data-id", movie.id);

    // Set source
    imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`;

    // Append the imageElement to the DOM element
    moviesEl.appendChild(imageElement);
  }
};

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
