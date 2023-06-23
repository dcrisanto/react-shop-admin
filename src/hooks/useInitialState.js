import { useState } from 'react';

const initialState = {
  modalOpen: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const toogleModal = () => {
    setState({
      modalOpen: !state.modalOpen,
    })
  }

  return {
    state,
    toogleModal
  }
};

export default useInitialState;
