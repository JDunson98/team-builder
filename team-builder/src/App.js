import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Member from './Components/Member';

function App() {
  const [members, newMember] = useState([
    {
      id: 1,
      name: 'Joshua Dunson',
      role: 'Fullstack web dev',
      email: 'jdunson98@yahoo.com'
    }
  ]);

  const addMember = (setMember) => {
    newMember([...members, setMember])
  }
  
  return (
    <div className="App">
      <h1>Member Registration Form</h1>
      <Form addMember={addMember}/>
      <Member members={members}/>
    </div>
    
  );
}

export default App;
