
const apiUrl = 'https://api.themoviedb.org';
const apiKey = 'b19174298b20aa6ab8a128e0614b0ab1'; // testing
// const apiReadAccessToken = 'tu_api_read_access_token';

const movieApi = {
    fetchTrendingMovies: async () => {
        const url = `${apiUrl}/3/trending/movie/day?api_key=${apiKey}`;
        const response = await fetch(url);
        return await response.json();
    },
    fetchMovieGenres: async () => {
        const url = `${apiUrl}/3/genre/movie/list?api_key=${apiKey}`;
        const response = await fetch(url);
        return await response.json();
    },
    fetchMovieDetails: async (movieId) => {
        const url = `${apiUrl}/3/movie/${movieId}?api_key=${apiKey}`;
        const response = await fetch(url);
        return await response.json();
    },
    fetchMovieCast: async (movieId) => {
        const url = `${apiUrl}/3/movie/${movieId}/credits?api_key=${apiKey}`;
        const response = await fetch(url);
        return await response.json();
    },
    fetchMovieRecommendations: async (movieId) => {
        const url = `${apiUrl}/3/movie/${movieId}/recommendations?api_key=${apiKey}`;
        const response = await fetch(url);
        return await response.json();
    }
};

export default movieApi;
