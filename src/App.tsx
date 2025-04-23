import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AlgorithmDetail from './pages/AlgorithmDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/algorithm/:id" element={<AlgorithmDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
