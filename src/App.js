// Imports from React-Router-Dom
import { Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";

// Import Components
import Nav from "./components/Nav";

// Imports for Styling
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
