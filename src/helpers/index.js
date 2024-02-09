
export const setStateHelper = (key, val, prevState) => {
    return { ...prevState, [key]: val }
};

export const getMovieImgUrl500 = ({backdrop_path}) => {
    const imgSize = 500;
    return `https://image.tmdb.org/t/p/w${imgSize}${backdrop_path}`
};

export const getMovieImgUrl780 = ({backdrop_path}) => {
    const imgSize = 780;
    return `https://image.tmdb.org/t/p/w${imgSize}/${backdrop_path}`
};

export const getMovieImgUrlOriginal = ({backdrop_path}) => {
    return `https://image.tmdb.org/t/p/original/${backdrop_path}`
};

export const sortByPopularityDesc = (arr) => {
    return arr.sort((a, b) => b.popularity - a.popularity);
};

export const formatMovieInfo = (movie) => {
    if (!movie) return;
    // Format date.
    const releaseDate = new Date(movie['release_date']);
    const formattedDate = `${releaseDate.getFullYear()}`;
  
    // Format runtime.
    const hours = Math.floor(movie.runtime / 60);
    const minutes = movie.runtime % 60;
    const formattedDuration = `${hours}h ${minutes}m`;
  
    // Combine/return of both formatted date and duration.
    return `${formattedDate} - ${formattedDuration}`;
  }
