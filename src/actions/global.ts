import store from "../reducers/store";
import types from "./types";

export const saveState = () => (dispatch: any) => {
    const stateToSave = store.getState();
    localStorage.setItem("state", JSON.stringify(stateToSave));
    dispatch({type: types.SAVE_STATE})
}

export const loadState = () => (dispatch: any) => {
    const stateString = localStorage.getItem("state");
    if (!stateString) return;
    dispatch({type: types.LOAD_STATE, state: JSON.parse(stateString)})
}