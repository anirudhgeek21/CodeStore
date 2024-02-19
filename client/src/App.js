import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Wall from './components/Wall';
import Upload from './components/Upload';
import DiscussRoute from './components/DiscussRoute';
import Profile from './components/Profile';
import BlogPage from './components/BlogPage';
import LandingPage from './components/Landing/LandingPage';


function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleEnterWorld = () => {
    setShowLandingPage(false);
  };

  return (
    <Router>
      <div className="App bg-black cursor-default">
        {showLandingPage ? (
          <LandingPage onEnterWorld={handleEnterWorld} />
          
          
        ) : (
          <>
            <Navigation />
            <div className="md:w-[100%] mx-auto">
              <Routes>
                <Route path="/" element={<Wall />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/discuss" element={<DiscussRoute />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/blogs/:id" element={<BlogPage />} />
              </Routes>
            </div>
            
            
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
