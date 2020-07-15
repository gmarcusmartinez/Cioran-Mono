export const setDisplayModal = (bool: boolean, component?: string) => (
  dispatch: any
) => {
  dispatch({
    type: 'SET_DISPLAY_MODAL',
    payload: { bool, component },
  });
};
