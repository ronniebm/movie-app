import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { MovieDetails, HomePage } from './components';
import './App.css';

const App = () => {

  return (
    <Router>
      <Layout>

        {/* --- Header --- */}
        <Layout.Header className='header'>
          <div className='h100 flex j-center a-center'>
            <h1 className='text-title text-center text-white min-width-270px'>
              Movie App
            </h1>
          </div>
        </Layout.Header> 

        {/* --- Routes --- */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie-details' element={<MovieDetails />} />
        </Routes>

      </Layout>
    </Router> 
  )
};

export default App;
