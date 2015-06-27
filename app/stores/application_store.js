import * as constants from 'app/constants'

const initialState = {
  counter: 0,
}

const actionsMap = {
  [constants.INCREMENT_COUNTER]: (state, action) => ({counter: state.counter ++})
}

export default function applicationStore (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state

  return Object.assign({}, state, reduceFn(state, action));
}
