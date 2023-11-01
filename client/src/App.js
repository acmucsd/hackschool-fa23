import React from 'react';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import CreatePurchase from './pages/CreatePurchase';
import ViewPurchase from './pages/ViewPurchase';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Navigate from="/" exact to="/create" />
          <Route exact path="/create" component={CreatePurchase} />
          <Route exact path="/view" component={ViewPurchase} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;