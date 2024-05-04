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

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><NavLink to="/">Start</NavLink></li> 
            <li><NavLink to="/players">Podopieczni</NavLink></li> 
            <li><NavLink to="/training">Treningi</NavLink></li> 
            <li><NavLink to="/calendar">Kalendarz</NavLink></li>   
          </ul>
        </nav> 
      </div>
      <section>
        <Routes>
        <Route path="/" element={<StartComponent />} />  
        <Route path="/training" element={<TrainingComponent />} />
        <Route path="/players" element={<PlayersComponent />} />
        <Route path="/calendar" element={<CalendarComponent />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;