export interface contactState {
  messages: string[];
}

const INITIAL_STATE = {
  messages: []
};

export default (
  state: contactState = INITIAL_STATE,
  action: any
): contactState => {
  switch (action.type) {
    case "LOAD_STATE":
      return {
        ...state,
        messages: action.state.messages
      };
    case "SEND_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.message]
      }
    default:
      return state;
  }
};
