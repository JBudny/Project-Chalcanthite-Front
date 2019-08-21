import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TabContainer from "../TabContainer";
import { getModesByDateInitial } from "../../../actions/postActions";

const Fresh = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getModes = quantity => dispatch(getModesByDateInitial(quantity));
    getModes(5);
  }, [dispatch]);

  const isLoading = useSelector(state => state.isLoading);
  const isError = useSelector(state => state.isError);
  if (isLoading) return `Loading...`;
  if (isError) return "Error";
  return <TabContainer />;
};

export default Fresh;
