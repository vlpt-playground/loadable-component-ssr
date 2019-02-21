import { useEffect } from 'react';
import { connect } from 'react-redux';
import { resolveIgnore } from '../modules/ignore';
import { withRouter } from 'react-router-dom';

const RouteListener = ({ history, resolveIgnore, ignore }) => {
  useEffect(() => {
    const unlisten = history.listen(location => {
      resolveIgnore();
      unlisten();
    });
    return unlisten;
  }, []);
  return null;
};

export default connect(
  state => ({
    ignore: state.ignore
  }),
  { resolveIgnore }
)(withRouter(RouteListener));
