import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

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
    minWidth: "33%",
    [theme.breakpoints.up("sm")]: {
      minWidth: "25%",
      maxWidth: "none"
    }
  }
}));

function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="off"
        >
          <Tab label="TOP" className={classes.tab} />
          <Tab label="TRENDING" className={classes.tab} />
          <Tab label="FRESH" className={classes.tab} />
          <Tab label="RANDOM" className={classes.tab} />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>TOP</TabContainer>}
      {value === 1 && <TabContainer>TRENDING</TabContainer>}
      {value === 2 && <TabContainer>FRESH</TabContainer>}
      {value === 3 && <TabContainer>RANDOM</TabContainer>}
    </div>
  );
}

export default ScrollableTabsButtonAuto;
