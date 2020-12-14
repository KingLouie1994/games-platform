// Imports from React
import { useState } from "react";

// Imports from Redux
import { useDispatch } from "react-redux";

// Import Actions
import { loadSearched } from "../actions/gamesAction";

// Imports for Styling
import styled from "styled-components";

// Imports for Animation
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

// Import Logo as image
import logo from "../img/logo.svg";

const Nav = () => {
  // State
  const [textInput, setTextInput] = useState("");

  // Fetch Searched Games
  const dispatch = useDispatch();

  // Event Handlers
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loadSearched(textInput));
    setTextInput("");
  };

  const clearSearchedHandler = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav>
      <Logo onClick={clearSearchedHandler}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input type="text" onChange={inputHandler} value={textInput} />
        <button onClick={submitHandler} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

// Styled Components
const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    font-weight: bold;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: orange;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;
