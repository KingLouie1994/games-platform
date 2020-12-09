// Imports from react
import { useEffect } from "react";

// Imports from redux
import { useDispatch } from "react-redux";

// Import Actions
import { loadGames } from "./actions/gamesAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <h1>Games Platform</h1>
    </div>
  );
}

export default App;
