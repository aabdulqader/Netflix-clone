import React, { useEffect } from "react";
import FooterContainer from "./Containers/FooterContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./ContextApi/StateProvider";
import { auth } from "./firebase";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Browse from "./pages/Browse";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // Create a listener to track who is singin/signup
  useEffect(() => {
    // listener
    auth.onAuthStateChanged((user) => {
      if (user) {
        // the user just logged in / the was logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/browse">
          {" "}
          <Browse />{" "}
        </Route>
      </Switch>
      <FooterContainer />
    </Router>
  );
}

export default App;
