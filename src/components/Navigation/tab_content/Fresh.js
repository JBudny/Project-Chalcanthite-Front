import React from "react";
import { useSelector } from "react-redux";
import TabContainer from "../TabContainer";

function Fresh() {
  const posts = useSelector(state => state.posts);
  return <TabContainer>{`FRESH: ${posts.length} posts`}</TabContainer>;
}

export default Fresh;
