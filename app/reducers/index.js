const initialState = {
  value: 'Primrose',
};

const actionTypes = {
  SAVE_WORLD: 'SAVE_WORLD',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_WORLD:
      return Object.assign({}, state, { value: 'World' });
    default: return state;
  }
}
