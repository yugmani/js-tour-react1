import React, { useState } from 'react';
import './style.css';

export default function App() {
  // let name = 'Yooog';""
  const [name, setName] = useState('yg');

  // let hobby = 'playing soccer';

  // let location = 'Los Angeles, CA';
  const [country, setCountry] = useState('CA');
  const [hobby, setHobby] = useState('playing soccer');

  const mystyle = {
    color: 'white',
    fontSize: '60px'
  };

  const h3style = {
    fontSize: '45px',
    color: 'yellow'
  };

  const hobbystyle = {
    color: 'gray',
    fontSize: '25px'
  };

  return (
    <div className="profile">
      <h1 style={mystyle}>Hi, I am {name}!</h1>
      <h3 style={h3style}>I am from {country}.</h3>
      <p style={hobbystyle}>I love {hobby}!</p>
      <button onClick={() => setName('yoog')}>Change Name</button>
      <button onClick={() => setCountry('USA')}>Change Country</button>
      <button onClick={() => setHobby('Coding')}>Change Hobby</button>
    </div>
  );
}
