// Imports from React-Router-Dom
import { Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";

// Imports for Styling
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
