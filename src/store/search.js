import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
// import { getDocsInCollection, readDoc, updateDocumentKey, writeDocument } from '../api/firebase';
// import { transactionsFilter } from '../helpers/formatters';
// import { getEmployes } from '../api/users';

import { useQuery } from '@tanstack/react-query';
import { movieApi } from '../services';

const useSearchStore = create(
  persist(
    (set, get) => ({
        isLoading: false,
        getTrendingMovies: () => useQuery({
            queryKey: 'trending-movies',
            queryFn: movieApi.fetchTrendingMovies,
        }),
        getMovieGenres: () => useQuery('movie-genres', movieApi.fetchMovieGenres),
        getMovieDetails: (movieId) => {
            useQuery(['movie-details', movieId], movieApi.fetchMovieDetails(movieId));
        },
        getMovieCast: (movieId) => {
            useQuery(['movie-cast', movieId], movieApi.fetchMovieCast(movieId));
        },
        getMovieRecommendations: (movieId) => {
            useQuery(['movie-recommendations', movieId], movieApi.fetchMovieRecommendations(movieId));
        },
    }),
    {
        name: 'search-storage', // name of the storage (must be unique).
        storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useSearchStore;
