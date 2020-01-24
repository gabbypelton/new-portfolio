import { Dispatch } from "redux";
import Axios from "axios";
import types from "./types";

Axios.defaults.baseURL = "http://localhost:5000";

export const sendMessage = (message: string) => (dispatch: Dispatch) => {
  dispatch({ type: types.ADD_MESSAGE });
  const token = localStorage.getItem("contactToken");
  Axios.post("/messages", { message, token })
    .then(response => {
      dispatch({
        type: types.ADD_MESSAGE_SUCCESS,
        payload: { ...response.data, content: message }
      });
    })
    .catch(error => {
      dispatch({ type: types.ADD_MESSAGE_FAIL, error });
    });
};

export const getToken = () => (dispatch: Dispatch) => {
  dispatch({ type: types.GET_TOKEN });
  Axios.get("/messages/token")
    .then(response => {
      localStorage.setItem("contactToken", response.data.token);
      dispatch({
        type: types.GET_TOKEN_SUCCESS
      });
    })
    .catch(error => {
      dispatch({ type: types.GET_TOKEN_FAIL, error });
    });
};

export const getMessages = () => (dispatch: Dispatch) => {
  dispatch({ type: types.GET_MESSAGES });
  const token = localStorage.getItem("contactToken");
  Axios.get(`/messages/mine?token=${token}`)
    .then(response => {
      dispatch({
        type: types.GET_MESSAGES_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({ type: types.GET_MESSAGES_FAIL, error });
    });
};