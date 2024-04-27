import React from 'react';
import MyComponent from './components/mycomponent';
import TrainingComponent from './components/TrainingComponent';
import './App.css';
import BasicMenu from './components/BasicMenu';

function App() {
  return (
    <>
      <div className="containerTop">
        <div className='leftMenu'>
          <ul className='topnav'>
            <li><a href="#Treningi">Treningi</a></li>
            <li><a href="#Podopieczni">Podopieczni</a></li>
            <li><a href="#Kalendarz">Kalendarz</a></li>
            <li><a href="#Elementarz Ćwiczeń">Elementarz Ćwiczeń</a></li>
          </ul>

        </div>
        <div className='rightMenu'>
        <BasicMenu />
        </div>




      </div>
      <div className='containerMain'>
        <h1>FitForce</h1>
        <p>Zarządzanie Treningiem</p>
        <MyComponent />
        <TrainingComponent />

      </div><div className="containerBottom"><h1>Dolny kontener</h1></div></>


  );
}

export default App;
