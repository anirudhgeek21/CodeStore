import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Wall from './components/Wall';
import Upload from './components/Upload';
import DiscussRoute from './components/DiscussRoute';
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <div className="App bg-black cursor-default">
        <Navigation />
        <div className="md:w-[100%] mx-auto">
          <Routes>
            <Route path="/" element={<Wall />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/discuss" element={<DiscussRoute />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        {/* <div className=' w-[100%]'>
          <Footer />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
