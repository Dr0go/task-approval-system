import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Tasks from './components/Tasks';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route for "/" */}
        <Route path="/" element={<h1>Welcome to the Task Approval System</h1>} />
        
        {/* Other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
