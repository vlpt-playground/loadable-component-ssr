import React from 'react';
import SelectAnimals from './components/SelectAnimals';
import { Route } from 'react-router-dom';
import loadable from '@loadable/component';
import RouteListener from './containers/RouteListener';

const RabbitPage = loadable(() => import('./pages/RabbitPage'));
const TurtlePage = loadable(() => import('./pages/TurtlePage'));

const App = () => {
  return (
    <>
      <SelectAnimals />
      <Route path="/rabbit" component={RabbitPage} />
      <Route path="/turtle" component={TurtlePage} />
      <RouteListener />
    </>
  );
};

export default App;
