import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Test1 } from './pages/Test1';
import { Test2 } from './pages/Test2';
import { Test3 } from './pages/Test3';
import { Summary } from './pages/Summary';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/test3" element={<Test3 />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
};

export default App; 