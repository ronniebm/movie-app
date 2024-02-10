import { Col, Row } from 'antd';
import MovieCard from './MovieCard';

const TopTiles = ({ state }) => {

    const { trendMovies, movieGenres }  = state;

    const data = trendMovies?.map((movie) => {
        return {
            ...movie,
            genre_names: movie.genre_ids.map((id) => {
                const genre = movieGenres.find((genre) => genre.id === id);
                return genre.name;
            }),
        }
    }) || [];

    return(
        <div className='top-tiles pb-2'>
            {/* --- Top-5-Movies, First Row --- */}
            <Row className='flex j-center pt-3 mb-2'>
                <Col xxl={9} xl={12} lg={8} md={8} sm={8} xs={24} className='mr-2'>
                    <MovieCard data={!!data && data[0]} />
                </Col>
                <Col xxl={9} xl={11} lg={15} md={15} sm={15} xs={24}>
                    <Row className='flex j-between'>
                        <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                            <MovieCard data={!!data && data[1]} />
                        </Col>
                        <Col xl={11} lg={11} md={11} sm={11} xs={24}>
                            <MovieCard data={!!data && data[2]} />
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* --- Top-5-Movies, Second Row --- */}
            <Row className='flex j-center'>
                <Col xxl={9} xl={12} lg={8} md={8} sm={8} xs={24} className='mr-2'>
                    <MovieCard data={!!data && data[3]} />
                </Col>
                <Col xxl={9} xl={11} lg={15} md={15} sm={15} xs={24}>
                    <MovieCard data={!!data && data[4]} />
                </Col>
            </Row>
        </div>
    )
};

export default TopTiles;
