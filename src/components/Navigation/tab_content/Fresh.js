import React from "react";
import { connect } from "react-redux";
import TabContainer from "../TabContainer";

function Fresh() {
  return <TabContainer>FRESH</TabContainer>;
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  null
)(Fresh);
