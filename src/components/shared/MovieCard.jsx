import { useNavigate } from "react-router-dom";
import { getMovieImgUrl780 } from "../../helpers";

const MovieCard = ({ data }) => {
    const navigate = useNavigate();

    const handleMovieCardClick = (movieId) => {
        navigate(`/movie-details/${movieId}`);
    };

    return(
        <div
            className='top5-tile movie-card c-pointer'
            onClick={() => handleMovieCardClick(data?.id)}
        >
            <img
                src={!!data && getMovieImgUrl780(data)}
                alt={!!data && data?.original_title}
                className='img'
            />  
            <div className='movie-card-footer flex-col j-end py-2 px-2'>
                <p className='text-white'>{data && data?.genre_names[0]}</p>
                <p className='text-white text-title-md'>{data && data?.original_title}</p>
            </div>
        </div>
    )
};

export default MovieCard;
