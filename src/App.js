import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Wall from './components/Wall';
import Upload from './components/Upload';

function App() {
  return (
    <Router>
      <div className="App bg-[#CDF5FD] cursor-default">
        <Navigation />
        <div className="md:w-[90%] mx-auto">
          <Routes>
            <Route path="/" element={<Wall />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
        <div className='fixed bottom-0 w-[100%]'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
