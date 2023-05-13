import React, { useState } from 'react';
import data from './data.js';
import List from './list.js';
import './style.css';

function App() {
  const [people, setpeople] = useState(data);
  return (
    <div>
      <h3>{people.length} birthdays today </h3>
      <List people={people} />
      <button onClick={() => setpeople([])}>clear all</button>
    </div>
  );
}
export default App;
