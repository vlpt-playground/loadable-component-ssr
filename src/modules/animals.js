import api from '../api';
const GET_TURTLE = 'animals/GET_TURTLE';
const GET_TURTLE_SUCCESS = 'animals/GET_TURTLE_SUCCESS';
const GET_RABBIT = 'animals/GET_RABBIT';
const GET_RABBIT_SUCCESS = 'animals/GET_RABBIT_SUCCESS';

export const getTurtle = () => async dispatch => {
  dispatch({ type: GET_TURTLE });
  const data = await api.getTurtle();
  dispatch({ type: GET_TURTLE_SUCCESS, payload: data });
};

export const getRabbit = () => async dispatch => {
  dispatch({ type: GET_RABBIT });
  const data = await api.getRabbit();
  dispatch({ type: GET_RABBIT_SUCCESS, payload: data });
};

const initialState = {
  loadingRabbit: false,
  loadingTurtle: false,
  rabbit: null,
  turtle: null,
  shouldIgnore: false
};

export default function animals(state = initialState, action) {
  switch (action.type) {
    case GET_RABBIT:
      return { ...state, loadingRabbit: true };
    case GET_RABBIT_SUCCESS:
      return { ...state, loadingRabbit: false, rabbit: action.payload };
    case GET_TURTLE:
      return { ...state, loadingTurtle: true };
    case GET_TURTLE_SUCCESS:
      return { ...state, loadingTurtle: false, turtle: action.payload };
    default:
      return state;
  }
}
