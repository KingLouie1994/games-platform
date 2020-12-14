// Imports from Redux
import { useDispatch } from "react-redux";

// Imports from React-Router-Dom
import { Link } from "react-router-dom";

// Import Actions
import { loadDetail } from "../actions/detailAction";

// Imports for Styling
import styled from "styled-components";

// Imports for Animation
import { motion } from "framer-motion";

// Import Utils
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  // Fetch Details
  const dispatch = useDispatch();

  // Event Handlers
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/games/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 1280)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

// Styled Components
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
