import {VIDEO_CLICKED} from './actionTypes';

const initialState = {
  VIDEO: '',
};

export const mainreducer = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_CLICKED:
      return {...state, VIDEO: action.payload};
    default:
      return state;
  }
};
