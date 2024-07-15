

import { useEffect } from 'react';
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
import ReactGA from "react-ga4";


function App() {

  //const GA4_MEASUREMENT_ID = "G-3X9Y40C3TC";
  
  useEffect(() => {
    ReactGA.initialize("G-61SDENNHNG");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: document.title });
  }, []);

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
