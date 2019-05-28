import React, {Fragment} from "react";
import SearchAppBar from './SearchBar';
import Navigation from './Navigation';

function HeaderContent() {
  return (
    <Fragment>
      <SearchAppBar />
      <Navigation />
    </Fragment>
  );
}

export default HeaderContent;
