import { TopTiles } from './shared';
import { Col, Row } from 'antd';

const HomePage = () => {
    return(
        <Row className='home-page flex j-center'>
            <Col className="gutter-row" xl={18} lg={19} md={20} sm={22} xs={20}>

                {/* --- Top-5-Movies, First Row --- */}
                <TopTiles />
                
                <div className='flex-col a-center py-3'>
                    <p className='pb-4 text-title text-white'>More Like This</p>
                    <div className='fixed-tile mb-2'></div>
                    <div className='fixed-tile mb-2'></div>
                    <div className='fixed-tile mb-2'></div>
                </div>
            </Col>
        </Row>
    )
};

export default HomePage;
