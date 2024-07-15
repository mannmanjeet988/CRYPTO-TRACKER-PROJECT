

import {useLocation, BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Common/Header';
import DashboardPage from "./pages/DashboardPage"
import MainComponent from './components/LandingPage/MainComponent';
import { Dashboard } from '@mui/icons-material';
 import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
import ComparePage from './pages/ComparePage.js/index.js';
import { RWebShare } from 'react-web-share';
import WatchListPage from './pages/Watchlist/WatchListPage';
import { ToastContainer } from 'react-toastify';
import GA4React from 'ga-4-react';


function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   ga4react.pageview(location.pathname + location.search);
  // }, [location]);

  const location = useLocation();
  const GA4_MEASUREMENT_ID="G-C6GX6L1YXT"

  useEffect(() => {
    const ga4react = new GA4React('GA4_MEASUREMENT_ID');
    ga4react.initialize().then(ga => {
      ga.pageview(location.pathname + location.search);
    });
  }, [location]);

  return (
    <div className="App">
      
      <ToastContainer />
      <BrowserRouter>
          <Routes>
            <Route path="/"  element ={<HomePage />} />
            <Route path="/dashboard" element ={<DashboardPage />} />
            <Route path="/coin/:id" element ={<CoinPage />} />
            <Route path="/compare" element ={<ComparePage />} />
            <Route path="/watchlist" element ={<WatchListPage />} />
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
