import "./styles/theme.css";
import "./styles/global.css";
import "./styles/fonts.css";

import React, { useEffect, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { History } from "./pages/history";
import { Settings } from "./pages/settings";
import { Details } from "./pages/details";
import { useSelector, useDispatch } from "react-redux";
import { fetchBuilds } from "./actions/fetchBuilds";
import { getBuilds } from "./selectors/getBuilds";
import { getConfig as getConfigAction } from "./actions/getConfig";
import i18n from "./lang/i18n";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBuilds(dispatch));
    dispatch(getConfigAction(dispatch));
  }, [dispatch]);

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  const builds = useSelector((state) => getBuilds(state));

  const home = useMemo(() => {
    if (!builds.length) {
      return <Home />;
    } else {
      return <History />;
    }
  }, [builds]);
  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/build/:id">
          <Details />
        </Route>
        <Route path="/">{home}</Route>
      </Switch>
    </Router>
  );
}
