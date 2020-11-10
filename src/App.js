import React, { useState } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import ThemeContext from "./context/ThemeContext";
import NavBar from "./components/NavBar";

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
