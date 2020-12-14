// Imports from Redux
import { combineReducers } from "redux";

// Import Reducers
import gamesReducers from "./gamesReducer";
import detailReducer from "./detailReducer";

// Create one Reducer that holds all other Reducers
const rootReducer = combineReducers({
  games: gamesReducers,
  detail: detailReducer,
});

export default rootReducer;
