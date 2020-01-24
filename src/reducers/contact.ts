import types from "../actions/types";

export interface message {
  content: string;
  _id: string;
  createdOn: string;
}
export interface contactState {
  messages: message[];
}

const INITIAL_STATE = {
  messages: []
};

export default (
  state: contactState = INITIAL_STATE,
  action: any
): contactState => {
  switch (action.type) {
    case types.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages
      };
    case types.ADD_MESSAGE_SUCCESS:
      const {savedMessage, content} = action.payload; 
      return {
        ...state,
        messages: [...state.messages, {...savedMessage, content}]
      }
    default:
      return state;
  }
};
