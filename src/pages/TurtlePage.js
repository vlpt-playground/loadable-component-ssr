import React from 'react';
import TurtleContainer from '../containers/TurtleContainer';
import { getTurtle } from '../modules/animals';

const TurtlePage = () => {
  return <TurtleContainer />;
};

TurtlePage.preload = ({ store }) => {
  return store.dispatch(getTurtle());
};

export default TurtlePage;
