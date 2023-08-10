import React from 'react';
import { BrowserRouter as Router,Link, Routes, Route } from 'react-router-dom';
import HomePage from './homePage'//mport your other components
import NotFoundPage from './NotFoundPage'; // Import the custom 404 component

const NotFound = () => {
  return (
    <div>
        <h2 className="not-found">
            Page Not Found
        </h2>
        <p>Go to the <Link to= '/'>Homepage</Link></p>
    </div>
  );
};

export default NotFound;
