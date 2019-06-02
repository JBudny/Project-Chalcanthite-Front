import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  tab: {
    minWidth: "33.33%",
    [theme.breakpoints.up("sm")]: {
      minWidth: "33.33%",
      maxWidth: "none"
    }
  },
  notFound: {
    textAlign: "center",
    "& span": {
      fontSize: "2rem",
      [theme.breakpoints.up("sm")]: {
        fontSize: "3rem"
      }
    }
  },
  tabs: {
    "& div.MuiTabs-scroller.MuiTabs-scrollable > div": {
      justifyContent: "center"
    }
  }
}));

function Top() {
  return <TabContainer>TOP</TabContainer>;
}

function Fresh() {
  return <TabContainer>FRESH</TabContainer>;
}

function Random() {
  return <TabContainer>RANDOM</TabContainer>;
}

function NoMatch({ location }) {
  const classes = useStyles();
  return (
    <div className={classes.notFound}>
      <TabContainer>
        <span>404 Not Found</span>
        <hr />
        <p>
          The page &#34;
          {` ${location.pathname} `}
          &#34; you were looking for doesn&#39;t exist. You may have mistyped the address or the
          page may have moved.
        </p>
      </TabContainer>
    </div>
  );
}

function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="off"
          >
            <Tab label="TOP" className={classes.tab} component={Link} to="/top" />
            <Tab label="FRESH" className={classes.tab} component={Link} to="/fresh" />
            <Tab label="RANDOM" className={classes.tab} component={Link} to="/random" />
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
}

export default ScrollableTabsButtonAuto;
