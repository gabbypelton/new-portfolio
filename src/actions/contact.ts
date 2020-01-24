import { Dispatch } from "redux";
import Axios from "axios";
import types from "./types";

export const sendMessage = (message: string) => (dispatch: Dispatch) => {
  dispatch({ type: types.ADD_MESSAGE });
  if (!process.env.API_URL) {
    dispatch({
      type: types.ADD_MESSAGE_FAIL,
      error: "Gabby forgot to give me an API url to call!"
    });
    return;
  }
  Axios.post(process.env.API_URL, { message }).then(response => {
    dispatch({
      type: types.ADD_MESSAGE_SUCCESS,
      payload: response.data
    });
  });
};
