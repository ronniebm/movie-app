import { useNavigate, useLocation } from "react-router-dom";
import { useQueryClient, } from '@tanstack/react-query'
import { getMovieImgUrl780 } from "../../helpers";
import { movieApi } from "../../services";

const MovieCardFixed = ({ data, state }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryClient = useQueryClient();

    const movieGenres = state?.movieGenres;

    const genreName = (genreId) => {
        const genre = movieGenres?.find((genre) => genre.id === genreId);
        return genre?.name;
    }

    const handleMovieCardClick = (movieId) => {
        const isMovieDetailsLocation = location.pathname.includes('movie-details');

        // queryClient.fetchQuery({
        //     queryKey: ['movie-details', movieId],
        //     queryFn: () => movieApi.fetchMovieDetails(movieId),
        // });
        // queryClient.fetchQuery({
        //     queryKey: ['movie-cast', movieId],
        //     queryFn: () => movieApi.fetchMovieCast(movieId),
        // });
        // queryClient.fetchQuery({
        //     queryKey: ['movie-recommendations', movieId],
        //     queryFn: () => movieApi.fetchMovieRecommendations(movieId),
        // });
        // queryClient.fetchQuery(['movie-cast']);
        // queryClient.fetchQuery(['movie-recommendations']);
        navigate(`/movie-details/${movieId}`);
        isMovieDetailsLocation && window.location.reload();
    };

    return(
        <div
            className='fixed-tile mb-2 top5-tile movie-card c-pointer'
            onClick={() => handleMovieCardClick(data?.id)}
        >
            <img className='img' src={getMovieImgUrl780(data)} alt={data.title} />
            <div className='movie-card-footer flex-col j-end py-2 px-2'>
                <p className='text-white'>{data?.genre_ids && genreName(data?.genre_ids[0])}</p>
                <p className='text-white text-title-md'>{data && data?.title}</p>
            </div>
        </div>
    )
};

export default MovieCardFixed;
