import React from 'react';
import TrainingComponent from './components/TrainingComponent';
import './App.css';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';

const PlayersComponent = () => {
  return <h2>Podopieczni</h2>;
};

const CalendarComponent = () => {
  return <h2>Kalendarz</h2>;
};
const StartComponent = () => {
  return <h2>Start</h2>;
};

const LoginComponent = () => {
  return <h2>Logowanie</h2>;
};
const RegisterComponent = () => {
  return <h2>Rejestracja</h2>;
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="nav-list">
            <div className="nav-main">
              <li><NavLink to="/">Start</NavLink></li> 
              <li><NavLink to="/players">Podopieczni</NavLink></li> 
              <li><NavLink to="/training">Treningi</NavLink></li> 
              <li><NavLink to="/calendar">Kalendarz</NavLink></li>   
            </div>
            <div className="nav-auth">
              <li><NavLink to="/login">Logowanie</NavLink></li>   
              <li><NavLink to="/register">Rejestracja</NavLink></li>   
            </div>
          </ul>
        </nav> 
      </div>
      <Routes>
        <Route path="/" element={<StartComponent />} />  
        <Route path="/training" element={<TrainingComponent />} />
        <Route path="/players" element={<PlayersComponent />} />
        <Route path="/calendar" element={<CalendarComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;