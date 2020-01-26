import types from "../actions/types";

export interface message {
  content: string;
  _id: string;
  createdOn: string;
}
export interface contactState {
  messages: message[];
  isLoading: boolean;
}

const INITIAL_STATE = {
  messages: [],
  isLoading: false
};

export default (
  state: contactState = INITIAL_STATE,
  action: any
): contactState => {
  switch (action.type) {
    case types.GET_MESSAGES:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages,
        isLoading: false
      };
    case types.GET_MESSAGES_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case types.ADD_MESSAGE_SUCCESS:
      const { savedMessage, content } = action.payload;
      return {
        ...state,
        messages: [...state.messages, { ...savedMessage, content }]
      };
    default:
      return state;
  }
};
