import Typography from "@material-ui/core/Typography";
import React from "react";
import PropTypes from "prop-types";

const TabContainer = props => {
  const { children } = props;

  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default TabContainer;
