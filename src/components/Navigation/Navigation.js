import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Fresh from "./tabContent/Fresh";
import NoMatch from "./tabContent/NoMatch";
import Random from "./tabContent/Random";
import styles from "./Navigation.styles";
import Top from "./tabContent/Top";

const Navigation = () => {
  const classes = styles();
  const { nav, tab } = classes;
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Router>
      <div className={nav}>
        <AppBar position="static" color="default">
          <Tabs
            value={currentTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="off"
          >
            <Tab label="TOP" className={tab} component={Link} to="/top" />
            <Tab label="FRESH" className={tab} component={Link} to="/fresh" />
            <Tab label="RANDOM" className={tab} component={Link} to="/random" />
          </Tabs>
        </AppBar>
        <Switch>
          <Redirect exact from="/" to="/top" />
          <Route path="/top" component={Top} />
          <Route path="/fresh" component={Fresh} />
          <Route path="/random" component={Random} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
