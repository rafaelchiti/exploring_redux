import * as constants from 'app/constants';

export function incrementCounter() {
  return dispatch => {
    dispatch({type: constants.INCREMENT_COUNTER});
  }
}
