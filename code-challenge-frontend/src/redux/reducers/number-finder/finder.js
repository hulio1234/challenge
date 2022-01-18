/* eslint-disable import/no-anonymous-default-export */
import {
    FIND_NUMBERS_FAILED,
    FIND_NUMBERS_SUCCESS,
  } from '../../actionTypes.js';
  
  const initialState = {
    status: '',
    message: '',
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FIND_NUMBERS_SUCCESS:
        return {
          ...state,
          status: 'find_numbers_success',
          message: action.message,
          data: action.data,
        };
      case FIND_NUMBERS_FAILED:
        return { ...state, status: 'find_numbers_failed', error: action.error };
      default:
        return state;
    }
  };
  