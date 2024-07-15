

// import { useEffect } from 'react';
// import {useLocation, BrowserRouter,Route,Routes } from 'react-router-dom';
// import './App.css';
// import Header from './components/Common/Header';
// import DashboardPage from "./pages/DashboardPage"
// import MainComponent from './components/LandingPage/MainComponent';
// import { Dashboard } from '@mui/icons-material';
//  import HomePage from './pages/HomePage';
// import CoinPage from './pages/CoinPage';
// import ComparePage from './pages/ComparePage.js/index.js';
// import { RWebShare } from 'react-web-share';
// import WatchListPage from './pages/Watchlist/WatchListPage';
// import { ToastContainer } from 'react-toastify';
// import ReactGA from "react-ga4";


// function App() {

//   const location = useLocation();
  
//   useEffect(() => {
//     ReactGA.initialize("G-61SDENNHNG");
//   }, []);

//   useEffect(() => {
//     ReactGA.send({ hitType: "pageview", page: location.pathname, title: document.title });
//   }, [location]);

  
//   return (
//     <div className="App">
      
//       <ToastContainer />
//       <BrowserRouter>
//           <Routes>
//             <Route path="/"  element ={<HomePage />} />
//             <Route path="/dashboard" element ={<DashboardPage />} />
//             <Route path="/coin/:id" element ={<CoinPage />} />
//             <Route path="/compare" element ={<ComparePage />} />
//             <Route path="/watchlist" element ={<WatchListPage />} />
//           </Routes>
//       </BrowserRouter>
      
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Common/Header';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import CoinPage from './pages/CoinPage';
import ComparePage from './pages/ComparePage';
import WatchListPage from './pages/Watchlist/WatchListPage';
import { ToastContainer } from 'react-toastify';
import ReactGA from 'react-ga4';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <RoutesComponent />
      </BrowserRouter>
    </div>
  );
}

function RoutesComponent() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("G-61SDENNHNG");
    ReactGA.ga('set', 'debug_mode', true);  // Enable Debug Mode
    console.log("GA initialized with ID:", "G-61SDENNHNG");
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname, title: document.title });
    console.log("Pageview sent:", { page: location.pathname, title: document.title });
  }, [location]);

  const logErrorEvent = (error) => {
    ReactGA.event({
      category: 'Error',
      action: 'An error occurred',
      label: error.message,
      nonInteraction: true,
    });
  };

  // Example of how to log an error
  useEffect(() => {
    try {
      // Simulate an error
      throw new Error('This is a simulated error');
    } catch (error) {
      logErrorEvent(error);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/coin/:id" element={<CoinPage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/watchlist" element={<WatchListPage />} />
    </Routes>
  );
}

export default App;
