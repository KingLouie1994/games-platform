// Imports from third party libraries
import axios from "axios";

// Import URL we want to fetch data from
import { popularGamesUrl, newGamesUrl, upcomingGamesUrl } from "../api";

// Create the actions
export const loadGames = () => async (dispatch) => {
  // Fetch Data with axios
  const popularData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularData.data.results,
      newGames: newGamesData.data.results,
      upcomingGames: upcomingData.data.results,
    },
  });
};
