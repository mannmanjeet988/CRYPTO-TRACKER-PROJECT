

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
import ComparePage from './pages/ComparePage.js/index.js';
import WatchListPage from './pages/Watchlist/WatchListPage';
import { ToastContainer } from 'react-toastify';

const RoutesComponent = () => {
  const location = useLocation(); // Get the current location (URL)

  useEffect(() => {
    // Log the page view event to the console for debugging
    console.log('Page view:', location.pathname);

    // Push page view event to the GTM data layer
    window.dataLayer.push({
      event: 'pageview',
      page: location.pathname, // Current page path
    });
  }, [location]); // Run this effect whenever the location changes

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/coin/:id" element={<CoinPage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/watchlist" element={<WatchListPage />} />
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <RoutesComponent /> {/* Render the routing component */}
      </BrowserRouter>
    </div>
  );
}

export default App;
