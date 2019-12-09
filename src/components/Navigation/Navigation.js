import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';

import { fresh, home, random, top } from '../../utils/regexps/navigation';
import styles from './Navigation.styles';
import Fresh from './tabContent/Fresh';
import NoMatch from './tabContent/NoMatch';
import Random from './tabContent/Random';
import Top from './tabContent/Top';

const Navigation = () => {
  const intl = useIntl();

  const classes = styles();
  const { nav, tab } = classes;

  const initialTab = () => {
    const { pathname } = window.location;
    switch (true) {
      case home.test(pathname):
      case top.test(pathname):
        return 0;
      case fresh.test(pathname):
        return 1;
      case random.test(pathname):
        return 2;
      default:
        return false;
    }
  };

  const [currentTab, setCurrentTab] = useState(() => initialTab());
  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const topLabel = intl.formatMessage({
    id: `navigation.tabs.top`,
    description: `Top tab label`,
    defaultMessage: `TOP`,
  });

  const freshLabel = intl.formatMessage({
    id: `navigation.tabs.fresh`,
    description: `Fresh tab label`,
    defaultMessage: `FRESH`,
  });

  const randomLabel = intl.formatMessage({
    id: `navigation.tabs.random`,
    description: `Random tab label`,
    defaultMessage: `RANDOM`,
  });

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
            <Tab label={topLabel} className={tab} component={Link} to="/top" />
            <Tab label={freshLabel} className={tab} component={Link} to="/fresh" />
            <Tab label={randomLabel} className={tab} component={Link} to="/random" />
          </Tabs>
        </AppBar>
        <Switch>
          <Redirect exact from="/" to="/top" />
          <Route exact path="/top" component={Top} />
          <Route exact path="/fresh" component={Fresh} />
          <Route exact path="/random" component={Random} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
