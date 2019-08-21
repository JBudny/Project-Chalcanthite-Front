import Typography from "@material-ui/core/Typography";
import React from "react";
import { useSelector } from "react-redux";
import Card from "./tab_content/Card/Card";
import styles from "./TabContainer.styles";

const TabContainer = () => {
  const classes = styles();
  const { wrapper } = classes;
  const posts = useSelector(state => state.posts);
  // eslint-disable-next-line no-underscore-dangle
  const keyExtractor = post => post._id;

  return (
    <Typography component="div" className={wrapper}>
      {posts ? posts.map(post => <Card key={keyExtractor(post)} post={post} />) : null}
    </Typography>
  );
};

export default TabContainer;
