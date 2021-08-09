import React, { useState } from 'react';

export default function Number() {
  const [number, setNumber] = useState(0);

  return (
    <div className="number">
      <h1>Number {number}</h1>
      <div className="btn">
        <button onClick={() => setNumber(number + 1)}>Increment</button>
        <button onClick={() => setNumber(number - 1)}>Decrement</button>
      </div>
    </div>
  );
}
