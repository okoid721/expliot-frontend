import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // import BrowserRouter
import Navbar from './components/Navbar';
import VideoList from './components/VideoList';  // Assuming this is another component
import './App.css' // Import your CSS file

const App = () => {
  return (
    <Router> {/* Wrap your app with Router */}
      <div className="App">
        <Navbar />
        <h1 className="text-2xl text-center p-2 font-extrabold ">🔞WELCOME TO EXPLIOT LEAKS🔞</h1>
        <VideoList />
      </div>
    </Router>
  );
};

export default App;
