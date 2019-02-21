import React from 'react';
import RabbitContainer from '../containers/RabbitContainer';
import { getRabbit } from '../modules/animals';

const RabbitPage = () => {
  return <RabbitContainer />;
};

RabbitPage.preload = ({ store }) => {
  return store.dispatch(getRabbit());
};

export default RabbitPage;
