import React, { lazy, Suspense, useState } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import ThemeContext from "./context/ThemeContext";

const Details = lazy(() => import("./components/Details"));
const SearchParams = lazy(() => import("./components/SearchParams"));

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me</Link>
          </header>
          <Suspense fallback={<h1>loading route ...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
