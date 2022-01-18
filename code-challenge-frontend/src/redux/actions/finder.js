/* eslint-disable import/no-anonymous-default-export */
import axios from './index.js';
import { FIND_NUMBERS_SUCCESS, FIND_NUMBERS_FAILED } from "../actionTypes.js";

export default (body) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/finder', body);

    const {
      data: {
        message,
        data
      },
    } = response;

    dispatch({
      type: FIND_NUMBERS_SUCCESS,
      message,
      data,
    });
  } catch (err) {
    let error = {};
    if (err.response) {
      const {
        data: { status, message },
      } = err.response;
      error = { status, message };
    } else {
      error = {
        status: 500,
        message: err.message,
      };
    }

    dispatch({ type: FIND_NUMBERS_FAILED, error });
  }
};

