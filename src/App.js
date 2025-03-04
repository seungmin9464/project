import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './theme/GlobalStyles';

import ThemeProvider from './context/themeProvider';

import './App.css';
import Main from './components/main/Main';
import ScrollToTop from './components/ScrollToTop';
import MorePcList from './components/main/include/forth/MorePcList';
import MoreMoList from './components/main/include/forth/MoreMoList';

const App = (props) => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  }, []);
  const [wide, setWide] = useState(window.innerWidth);
  const isMobile = wide <= 865;
  
  useEffect(() => {
    const handleResize = () => {
      setWide(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize); // resize 이벤트 등록
  
    // Cleanup: 컴포넌트가 언마운트될 때 이벤트 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Main />} />
            {isMobile 
              ? <Route path='/more-mo-list' element={<MoreMoList />} />
              : <Route path='/more-pc-list' element={<MorePcList />} /> }
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
