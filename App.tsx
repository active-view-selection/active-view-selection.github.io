import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { DetailedQualitativeView } from './components/DetailedQualitativeView';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detailed" element={<DetailedQualitativeView />} />
      </Routes>
    </HashRouter>
  );
};

export default App;