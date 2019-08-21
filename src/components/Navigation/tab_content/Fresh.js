import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TabContainer from "../TabContainer";
import { getModesByDateInitial } from "../../../actions/postActions";

const Fresh = () => {
  const dispatch = useDispatch();
  const getModes = quantity => dispatch(getModesByDateInitial(quantity));

  useEffect(() => {
    getModes(5);
  }, []);

  const posts = useSelector(state => state.posts);
  const isLoading = useSelector(state => state.isLoading);
  return <TabContainer>{isLoading ? `loading...` : `FRESH: ${posts.length} posts`}</TabContainer>;
};

export default Fresh;
