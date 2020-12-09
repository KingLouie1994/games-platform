// Imports from react
import { useEffect } from "react";

// Imports from redux
import { useDispatch } from "react-redux";

// Import Actions
import { loadGames } from "../actions/gamesAction";

const Home = () => {
  // Fetch Games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
