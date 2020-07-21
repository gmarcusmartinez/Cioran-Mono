import { Dispatch } from 'redux';

export const setDisplayModal = (bool: boolean, component?: string) => (
  dispatch: Dispatch
) => {
  dispatch({
    type: 'SET_DISPLAY_MODAL',
    payload: { bool, component },
  });
};
