import React from 'react';
import TrainingComponent from './components/TrainingComponent';
import './App.css';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Exercises from './components/exercises';
import Players from './components/players';
import Calendar from './components/calendar';
import Start from './components/start';


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="nav-list">
            <div className="nav-main">
              <li><NavLink to="/start">Start</NavLink></li> 
              <li><NavLink to="/players">Podopieczni</NavLink></li> 
              <li><NavLink to="/training">Treningi</NavLink></li>
              <li><NavLink to="/exercises">Ćwiczenia</NavLink></li>  
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
        <Route path="/start" element={< Start/>} />  
        <Route path="/training" element={<TrainingComponent />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/players" element={<Players />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;