// Imports from React
import { useEffect } from "react";

// Imports from Redux
import { useDispatch, useSelector } from "react-redux";

// Imports from React-Router-Dom
import { useLocation } from "react-router-dom";

// Import Actions
import { loadGames } from "../actions/gamesAction";

// Import Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

// Imports for Styling
import styled from "styled-components";

// Imports for Animation
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animations";

const Home = () => {
  // Get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // Fetch Games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Make Games Data usable
  const { popularGames, newGames, upcomingGames, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => {
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
          </div>
        ) : (
          ""
        )}
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
      </AnimateSharedLayout>
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
