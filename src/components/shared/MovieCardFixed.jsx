import { useNavigate } from "react-router-dom";
import { getMovieImgUrl780 } from "../../helpers";

const MovieCardFixed = ({ data, state }) => {
    const navigate = useNavigate();
    const movieGenres = state?.movieGenres;

    const genreName = (genreId) => {
        const genre = movieGenres?.find((genre) => genre.id === genreId);
        return genre?.name;
    }

    const handleMovieCardClick = (movieId) => {
        console.log('MovieCardClicked: ', movieId);
        navigate(`/movie-details/${movieId}`);
        window.location.reload();
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
