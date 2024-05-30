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
import { SlLogin } from "react-icons/sl";
import logo from './fitforce.png';
import ProgressChart from './components/progresschart';
import { IoHomeOutline } from "react-icons/io5";
import { TbGymnastics } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { CiViewList } from "react-icons/ci";
import { GiProgression } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="nav-list">
            <div className="nav-main">
              <li><NavLink to="/start"> <IoHomeOutline/> Start</NavLink></li> 
              <li><NavLink to="/players"> <TbGymnastics /> Podopieczni</NavLink></li> 
              <li><NavLink to="/training"> <CgGym /> Treningi</NavLink></li>
              <li><NavLink to="/exercises"> <CiViewList /> Ćwiczenia</NavLink></li>  
              <li><NavLink to="/progresschart"> <GiProgression /> Progres</NavLink></li>
              <li><NavLink to="/calendar"> <CiCalendarDate /> Kalendarz</NavLink></li>   
            </div>
            <img src={logo} alt="logo" className="logo" />
            <div className="nav-auth">
              <li><NavLink to="/login"><SlLogin /> Logowanie</NavLink></li>   
              <li><NavLink to="/register"> <VscAccount /> Rejestracja</NavLink></li>   
            </div>
          </ul>
        </nav> 
      </div>
      <Routes>
        <Route path="/start" element={< Start/>} />  
        <Route path="/training" element={<TrainingComponent />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/players" element={<Players />} />
        <Route path="/progresschart" element={<ProgressChart />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;