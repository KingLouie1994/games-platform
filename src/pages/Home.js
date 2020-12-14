// Imports from React
import { useEffect } from "react";

// Imports from Redux
import { useDispatch, useSelector } from "react-redux";

// Import Actions
import { loadGames } from "../actions/gamesAction";

// Import Components
import Game from "../components/Game";

// Imports for Styling
import styled from "styled-components";

// Imports for Animation
import { motion } from "framer-motion";

const Home = () => {
  // Fetch Games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Make Games Data usable
  const { popularGames, newGames, upcomingGames } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcomingGames.map((game) => {
          return (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          );
        })}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popularGames.map((game) => {
          return (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          );
        })}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => {
          return (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          );
        })}
      </Games>
    </GameList>
  );
};

// Styled Components
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
