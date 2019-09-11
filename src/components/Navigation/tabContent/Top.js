import React from "react";
import { useSelector } from "react-redux";
import TabContainer from "../TabContainer";

const Top = () => {
  const isLoading = useSelector(state => state.isLoading);
  const isError = useSelector(state => state.isError);
  if (isLoading) return `Loading...`;
  if (isError) return `Error`;
  return <TabContainer />;
};

export default Top;
