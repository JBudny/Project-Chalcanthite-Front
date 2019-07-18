import React from "react";
import { useSelector } from "react-redux";
import TabContainer from "../TabContainer";

function Fresh() {
  const posts = useSelector(state => state.posts);
  const isLoading = useSelector(state => state.isLoading);
  return <TabContainer>{isLoading ? `loading...` : `FRESH: ${posts.length} posts`}</TabContainer>;
}

export default Fresh;
