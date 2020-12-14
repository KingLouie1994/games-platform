// Imports from Redux
import { useDispatch } from "react-redux";

// Import Actions
import { loadDetail } from "../actions/detailAction";

// Imports for Styling
import styled from "styled-components";

// Imports for Animation
import { motion } from "framer-motion";

const Game = ({ name, released, image, id }) => {
  // Fetch Details
  const dispatch = useDispatch();

  // Event Handlers
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

// Styled Components
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
