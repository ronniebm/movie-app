import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopTiles } from './shared';
import { Col, Row } from 'antd';
import { sortByPopularityDesc, setStateHelper } from '../helpers';

import { useQueries, useQuery } from '@tanstack/react-query';
import { movieApi } from '../services';
import { MovieCard } from './shared';

const HomePage = () => {

    const [state, setState] = useState({
        error: false,
        trendMovies: undefined,
        movieGenres: undefined,
    });

    const trendMoviesQuery = useQuery({
        queryKey: ['trend-movies'],
        queryFn: movieApi.fetchTrendingMovies,
    });

    const movieGenresQuery = useQuery({
        queryKey: ['movie-genres'],
        queryFn: movieApi.fetchMovieGenres,
    });

    useEffect( () => {
        if (state.trendMovies || state.movieGenres) return;

        if (trendMoviesQuery.isSuccess && movieGenresQuery.isSuccess) {
            const trendMovies = trendMoviesQuery?.data?.results;
            const movGenres = movieGenresQuery?.data?.genres;

            console.log('trendMovies:', trendMovies);
            console.log('movGenres:', movGenres);
            setState((prevState) => ({
              ...prevState,
              trendMovies: sortByPopularityDesc(trendMovies),
              movieGenres: movGenres,
            }));
        };

    }, [trendMoviesQuery, movieGenresQuery]);

    return(
        <Row className='home-page flex j-center'>
            <Col className="gutter-row" xl={18} lg={19} md={20} sm={22} xs={20}>
                
                {/* --- Top-5-Movies, First Row --- */}
                <TopTiles state={state} />

                <div className='flex-col a-center py-3'>
                    <p className='pb-4 text-title text-white'>More Like This</p>
                    {/* <MovieCard data={state.trendMovies && state.trendMovies[0]}/> */}
                    <div className='fixed-tile mb-2'></div>
                    <div className='fixed-tile mb-2'></div>
                    <div className='fixed-tile mb-2'></div>
                </div>
            </Col>
        </Row>
    )
};

export default HomePage;
