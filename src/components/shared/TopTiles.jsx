import { Col, Row } from 'antd';

const TopTiles = () => {
    return(
        <div className='top-tiles  pb-2'>

            {/* --- Top-5-Movies, First Row --- */}
            <Row className='flex j-center pt-4 mb-2'>
                <Col xxl={9} xl={12} lg={8} md={8} sm={8} xs={24} className='mr-2'>
                    <div className='top5-tile'></div>
                </Col>
                <Col xxl={9} xl={11} lg={15} md={15} sm={15} xs={24}>
                    <Row className='flex j-between'>
                        <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                            <div className='top5-tile'></div>
                        </Col>
                        <Col xl={11} lg={11} md={11} sm={11} xs={24}>
                            <div className='top5-tile'></div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* --- Top-5-Movies, Second Row --- */}
            <Row className='flex j-center'>
                <Col xxl={9} xl={12} lg={8} md={8} sm={8} xs={24} className='mr-2'>
                    <div className='top5-tile'></div>
                </Col>
                <Col xxl={9} xl={11} lg={15} md={15} sm={15} xs={24}>
                    <div className='top5-tile'></div>
                </Col>
            </Row>
        </div>
    )
};

export default TopTiles;
