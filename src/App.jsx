import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from "./Home";
import About from "./About";


const App = () => {
  return (
    <>
      <div className="max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <Router> 
          <nav>
            <Link to="/">หน้าหลัก</Link> | 
            <Link to="/about">เกี่ยวกับเรา</Link>
          </nav>
          
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

        </Router>
      </div>
    </>
  );
};

export default App;
