import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContainer from "./TabContainer";
import styles from "./Navigation.styles";

const Navigation = () => {
  const classes = styles();
  const { nav, tab } = classes;
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const renderTab = () =>
    (currentTab === 0 && <TabContainer>TOP</TabContainer>) ||
    (currentTab === 1 && <TabContainer>TRENDING</TabContainer>) ||
    (currentTab === 2 && <TabContainer>FRESH</TabContainer>) ||
    (currentTab === 3 && <TabContainer>RANDOM</TabContainer>);

  return (
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
          <Tab label="TOP" className={tab} />
          <Tab label="TRENDING" className={tab} />
          <Tab label="FRESH" className={tab} />
          <Tab label="RANDOM" className={tab} />
        </Tabs>
      </AppBar>
      {renderTab()}
    </div>
  );
};

export default Navigation;
