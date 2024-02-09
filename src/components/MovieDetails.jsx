import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Col, Row } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { movieApi } from '../services';
import cinemaChairs from '../assets/cinema-chairs.svg';
import { getMovieImgUrlOriginal, getMovieImgUrl500 } from '../helpers';

const MovieDetails = () => {
    const { movieId } = useParams();
    console.log('movieId: ', movieId);

    const [state, setState] = useState({
        error: false,
        movieDetails: undefined,
    });

    const movieDetailsQuery = useQuery({
        queryKey: ['movie-details', movieId],
        queryFn:  () => movieApi.fetchMovieDetails(movieId)
      });

    useEffect(() => {
        if (state.movieDetails) return;

        const movieDetails = movieDetailsQuery?.data;
        console.log('movieDetailsQuery: ', movieDetailsQuery);
        console.log('movieDetails: ', movieDetails);
        const backdrop_path = movieDetails?.backdrop_path;
        console.log('imageUrl: ', backdrop_path && getMovieImgUrl500(backdrop_path));

        setState((prevState) => ({
            ...prevState,
            movieDetails: {
                ...movieDetails,
            },
        }));

    }, [movieDetailsQuery]);

    // useEffect(() => {
    //     console.log('backkkk: ', state.movieDetails?.backdrop_path);
    // }, [state.movieDetails]);

    return(
        <div className='movie-details'>
            <div className='hero'>
                <img
                    // src={state.movieDetails && state.movieDetails?.imageUrl}
                    className="image"
                    alt='movie-image'
                />

                <div className='top-shadow'/>
                <Row className='hero-content flex j-center a-center'>
                    <Col className="gutter-row" xl={13} lg={14} md={16} sm={18} xs={20}>
                        <h1 className='text-title text-white'>The Marvels</h1>
                        <p className='text-gray-100'>2024 - 1h 45m</p>
                        <div className='mt-2'>
                            <Badge count='Genre #1' size='large' className='mr-2'/>
                            <Badge count='Genre #1' size='large' className='mr-2'/>
                            <Badge count='Genre #1' size='large' />
                        </div>
                    </Col>
                </Row>

            </div>

            <Row className='flex j-center a-center'>
                <Col className="gutter-row py-2" xl={13} lg={14} md={16} sm={18} xs={20}>
                    <p className='text-white fw-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
            </Row>

            <div className='flex-col a-center py-3'>
                <p className='pb-4 text-title text-white'>More Like This</p>
                <div className='fixed-tile mb-2'></div>
                <div className='fixed-tile mb-2'></div>
                <div className='fixed-tile mb-2'></div>
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
