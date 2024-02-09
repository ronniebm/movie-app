
export const setStateHelper = (key, val, prevState) => {
    return {...prevState, [key]: val}
};

export const getMovieImgUrl500 = ({backdrop_path}) => {
    const imgSize = 500;
    return `https://image.tmdb.org/t/p/w${imgSize}/${backdrop_path}`
};

export const getMovieImgUrlOriginal = ({backdrop_path}) => {
    const imgSize = 'original';
    return `https://image.tmdb.org/t/p/w${imgSize}/${backdrop_path}`
};

export const sortByPopularityDesc = (arr) => {
    return arr.sort((a, b) => b.popularity - a.popularity);
};
