import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MovieDetails, HomePage } from './components';
import './App.css';

const App = () => {

  // --- Creating a React-query client. ---
  const queryClient = new QueryClient()

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Layout>
          {/* --- Header. --- */}
          <Layout.Header className='header'>
            <div className='flex j-center a-center h100'>
              <h1 className='text-title text-center text-white min-width-270px'>
                Movie App
              </h1>
            </div>
          </Layout.Header> 

          {/* --- Routes. --- */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie-details/:movieId' element={<MovieDetails />} />
          </Routes>

        </Layout>
      </QueryClientProvider>
    </Router> 
  )
};

export default App;
