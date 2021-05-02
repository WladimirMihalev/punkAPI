 
import React, { useState } from 'react';
import './App.css';
import BeerList from './components/List/BeerList.js';
import Modal from './components/Modal/Modal.js';
 

function App() {
 const [modalActive, setModalActive] = useState(false);
  return (
    <div className="App">
      <main>
      <button className='open-btn' onClick={()=> setModalActive(true)}>Registration  &#9993;</button>
      <p><BeerList/></p> 
      </main>
      <Modal active={modalActive} setActive={setModalActive}/>
    
      
    </div>
  );
}

export default App;
