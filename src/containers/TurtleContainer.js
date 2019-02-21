import React, { useEffect } from 'react';
import Turtle from '../components/Turtle';
import { connect } from 'react-redux';
import { getTurtle } from '../modules/animals';
import ImageViewer from '../components/ImageViewer';

const TurtleContainer = ({ turtle, loading, getTurtle, ignore }) => {
  useEffect(() => {
    if (ignore) return;
    getTurtle();
  }, []);
  return (
    <>
      <Turtle />
      <ImageViewer src={turtle} alt="turtle" loading={loading} />
    </>
  );
};

export default connect(
  state => ({
    turtle: state.animals.turtle,
    loading: state.animals.loadingTurtle,
    ignore: state.ignore
  }),
  { getTurtle }
)(TurtleContainer);
