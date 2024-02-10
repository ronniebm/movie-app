import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Col, Row, Flex, Spin } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { movieApi } from '../services';
import cinemaChairs from '../assets/cinema-chairs.svg';
import { getMovieImgUrlOriginal, formatMovieInfo, setStateHelper } from '../helpers';
import { MovieCardFixed } from './shared';

const MovieDetails = () => {
    const { movieId } = useParams();

    const [state, setState] = useState({
        error: false,
        movieDetails: undefined,
        movieCast: undefined,
        movieRecommendations: undefined,
        isLoading: false,
    });

    const [, forceUpdate] = useState();

    const movieDetailsQuery = useQuery({
        queryKey: ['movie-details', movieId],
        queryFn:  () => movieApi.fetchMovieDetails(movieId)
    });

    const movieCastQuery = useQuery({
        queryKey: ['movie-cast', movieId],
        queryFn:  () => movieApi.fetchMovieCast(movieId)
    });

    const recommendationsQuery = useQuery({
        queryKey: ['movie-recommendations', movieId],
        queryFn:  () => movieApi.fetchMovieRecommendations(movieId)
    });

    useEffect(() => {
        if (state.movieDetails && state.movieCast && state.movieRecommendations) return;

        const isLoading = movieDetailsQuery.isLoading || movieCastQuery.isLoading || recommendationsQuery.isLoading;
        console.log('isLoading: ', isLoading);
        setState((prevState) => ({
            ...prevState,
            isLoading,
        }));

        if (movieDetailsQuery.isSuccess && movieCastQuery.isSuccess && recommendationsQuery.isSuccess) {
            const movieDetails = movieDetailsQuery?.data;
            console.log(movieDetailsQuery);
            const movieCast = movieCastQuery?.data;
            const movieCastFilteredData = {
                director: movieCast?.crew?.filter((member) => member.job === 'Director'),
                writer: movieCast?.crew?.filter((member) => member.job === 'Screenplay'),
                cast: movieCast?.cast?.slice(0, 5),
            }
            const movieRecommendations = recommendationsQuery?.data?.results;

            setState((prevState) => ({
                ...prevState,
                movieDetails: {
                    ...movieDetails,
                    imageUrl: getMovieImgUrlOriginal(movieDetails),
                },
                movieCast: movieCastFilteredData,
                movieRecommendations
            }));
        }
    }, [movieDetailsQuery]);

    return(
        <div className='movie-details'>
            <div className='hero'>
                {!state.isLoading
                    ? <img
                        src={state.movieDetails?.imageUrl}
                        className="image"
                        alt='movie-image'
                    />
                    : <Spin size="large">
                        <div className="content" />
                    </Spin>
                }

                <div className='top-shadow'/>
                <Row className='hero-content flex j-center a-center'>
                    <Col className="gutter-row" xl={13} lg={14} md={16} sm={18} xs={22}>
                        <h1 className='text-title text-white'>{state.movieDetails?.title}</h1>
                        <p className='text-gray-100'>{formatMovieInfo(state.movieDetails)}</p>
                        <div className='mt-2'>
                            {state.movieDetails?.genres?.map((genre) => (
                                <Badge key={genre.name} count={genre.name} size='large' className='mr-2'/>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>

            <Row className='flex j-center a-center'>
                <Col className="gutter-row py-2" xl={13} lg={14} md={16} sm={18} xs={22}>
                    <p className='text-white fw-200 overview'>{state.movieDetails?.overview}</p>
                    <p className='text-white pt-2'>Director: {state.movieCast?.director[0].name}</p>
                    <p className='text-white pt-2'>Writer: {state.movieCast?.writer[0]?.name || '[Will update soon]'}</p>
                    <p className='text-white pt-2'>Cast: {state.movieCast?.cast.map((member) => member.name).join(', ')}</p>
                </Col>
            </Row>

            <div className='flex-col a-center pt-4 pb-15'>
                <p className='pb-4 text-title text-white'>Recommendations</p>
                {state.movieRecommendations?.map((movie) => (
                    <MovieCardFixed key={movie.title} data={movie} forceUpdate={forceUpdate} />
                ))}
            </div>

            <img
                src={cinemaChairs}
                alt='cinema-chairs'
                className='cinema-chairs'
            />
        </div>
    )
};

export default MovieDetails;
