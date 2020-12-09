// Defining the initial State
const initialState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

// Creating the Reducer
const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

export default gamesReducer;
