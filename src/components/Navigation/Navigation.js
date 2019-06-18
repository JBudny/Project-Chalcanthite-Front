import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Navigation.styles";
import Top from "./tab_content/Top";
import Fresh from "./tab_content/Fresh";
import Random from "./tab_content/Random";
import NoMatch from "./tab_content/NoMatch";
import getModesByDateInitial from "../../actions/postActions";

const Navigation = props => {
  const classes = styles();
  const { nav, tab } = classes;
  const [currentTab, setCurrentTab] = useState(0);
  const { getModesInitial } = props;

  const handleChange = (event, newValue) => {
    getModesInitial(5);
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

const mapDispatchToProps = dispatch => {
  return {
    getModesInitial: quantity => dispatch(getModesByDateInitial(quantity))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navigation);
