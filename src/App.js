import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateAccountPage from './components/CreateAccountPage';
import LoginPage from './components/LoginPage';
import AccountSettingsPage from './components/AccountSettingsPage';

function App() {
  return (
    <Router>
      <div className="mainApp">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;