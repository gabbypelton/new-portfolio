export interface sessionState {
  token: string;
}

const INITIAL_STATE = {
  token: ""
};

export default (
  state: sessionState = INITIAL_STATE,
  action: any
): sessionState => {
  switch (action.type) {
    default:
      return state;
  }
};
