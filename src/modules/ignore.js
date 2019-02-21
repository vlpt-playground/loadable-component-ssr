const APPLY_IGNORE = 'ignore/APPLY_IGNORE';
const RESOLVE_IGNORE = 'ignore/RESOLVE_IGNORE';

export const applyIgnore = () => ({
  type: APPLY_IGNORE
});
export const resolveIgnore = () => ({
  type: RESOLVE_IGNORE
});

const initialState = true;

export default function ignore(state = initialState, action) {
  switch (action.type) {
    case APPLY_IGNORE:
      return true;
    case RESOLVE_IGNORE:
      return false;
    default:
      return state;
  }
}
