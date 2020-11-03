const API = "79f396163369de9b0eaa9bd262b854e5";

const request = {
    fetchTredning: `/trending/all/week?api_key=${API}&language=en-US `,
    fetchNetflixOriginals: `/discover/tv?api_key=${API}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API}&with_genres=99`,

}

export default request;

///discover/movie?api_key=79f396163369de9b0eaa9bd262b854e5&with_genres=27