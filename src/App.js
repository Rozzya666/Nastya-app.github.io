import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router';
import Loader from './components/Loader';
import AboutMe from './pages/AboutMe';
import Price from './pages/Price';
import HomeCare from './pages/HomeCare';
import Training from './pages/training';
import Reviews from './pages/Reviews';
import Footer from './components/footer/Footer';
function App() {
  useEffect(() => {
    fetchingData()
  }, [])

  const [isLoading, setIsLoading] = useState(false)
  function fetchingData() {
    setIsLoading(true)
    setTimeout(() => {
      <Routes /> 
      setIsLoading(false)
  }, 1500)
  }
  return (
    <div className='backgr'>
      {isLoading
      ? <Loader />
      : <div className='full_content'>
          <div className='main'>
          <Header />
          <Routes>
            <Route path='/reviews' element={ <Reviews /> } />
            <Route path='/training' element={ <Training /> } />
            <Route path='/about' element={ <AboutMe /> } />
            <Route path='/homecare' element={ <HomeCare /> } />
            <Route path='/price' element={ <Price /> } />
          </Routes>
        </div>
        <Footer  />
      </div>
      // working by Rozzya666
      
      }
    </div>
  );
}
export default App;
