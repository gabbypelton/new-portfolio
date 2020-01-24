import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import session, { sessionState } from "./session";
import contact, { contactState } from "./contact";

export interface rootState {
  session: sessionState;
  contact: contactState;
}

const rootReducer = combineReducers({
  session,
  contact
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
