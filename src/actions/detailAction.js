// Imports from third party libraries
import axios from "axios";

// Import URL we want to fetch data from
import { gameDetailsUrl, gameScreenshotUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailsUrl(id));
  const screenshots = await axios.get(gameScreenshotUrl(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenshots: screenshots.data,
    },
  });
};
