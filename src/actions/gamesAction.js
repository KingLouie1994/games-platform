// Imports from third party libraries
import axios from "axios";

// Import URL we want to fetch data from
import { popularGamesUrl } from "../api";

// Create the actions
export const loadGames = () => async (dispatch) => {
  // Fetch Data with axios
  const popularData = await axios.get(popularGamesUrl());
  dispatch({
      type: "FETCH_GAMES",
      payload: {
          popular: popularData.data.results,
      }
  })
};
