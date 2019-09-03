import React from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import Card from "./tabContent/Card/Card";
import styles from "./TabContainer.styles";

const TabContainer = () => {
  const classes = styles();
  const { wrapper } = classes;
  const posts = useSelector(state => state.posts);
  // eslint-disable-next-line no-underscore-dangle
  const keyExtractor = post => post._id;

  return (
    <Typography component="div" className={wrapper}>
      {posts
        ? posts.map(post => {
            const processedPost = JSON.parse(JSON.stringify(post));
            processedPost.tags = processedPost.tags.join(", ");

            return (
              <Card key={keyExtractor(processedPost)} post={processedPost} />
            );
          })
        : null}
    </Typography>
  );
};

export default TabContainer;
