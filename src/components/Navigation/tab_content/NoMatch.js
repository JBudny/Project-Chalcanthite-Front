import React from "react";
import TabContainer from "../TabContainer";
import styles from "../Navigation.styles";

function NoMatch({ location }) {
  const classes = styles();
  const { notFound } = classes;
  const { pathname } = location;

  return (
    <div className={notFound}>
      <TabContainer>
        <span>404 Not Found</span>
        <hr />
        <p>
          The page &#34;
          {` ${pathname} `}
          &#34; you were looking for doesn&#39;t exist. You may have mistyped the address or the
          page may have moved.
        </p>
      </TabContainer>
    </div>
  );
}

export default NoMatch;
