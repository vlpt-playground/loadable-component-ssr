import React from 'react';
import { Link } from 'react-router-dom';
import './SelectAnimals.css';

const SelectAnimals = () => {
  return (
    <div className="SelectAnimals">
      <Link to="/rabbit">토끼</Link>
      <Link to="/turtle">거북이</Link>
    </div>
  );
};

export default SelectAnimals;
