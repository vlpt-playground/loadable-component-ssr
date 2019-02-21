import React, { useEffect } from 'react';
import Rabbit from '../components/Rabbit';
import { connect } from 'react-redux';
import { getRabbit } from '../modules/animals';
import ImageViewer from '../components/ImageViewer';

const RabbitContainer = ({ rabbit, loading, getRabbit, ignore }) => {
  useEffect(() => {
    if (ignore) return;
    getRabbit();
  }, []);
  return (
    <>
      <Rabbit />
      <ImageViewer src={rabbit} alt="rabbit" loading={loading} />
    </>
  );
};

export default connect(
  state => ({
    rabbit: state.animals.rabbit,
    loading: state.animals.loadingRabbit,
    ignore: state.ignore
  }),
  { getRabbit }
)(RabbitContainer);
