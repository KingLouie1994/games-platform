// Imports from Redux
import { combineReducers } from "redux";

// Import Reducers
import gamesReducers from "./gamesReducer";

// Create one Reducer that holds all other Reducers
const rootReducer = combineReducers({
  games: gamesReducers,
});

export default rootReducer;
