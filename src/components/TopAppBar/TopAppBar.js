// @flow

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import styles from './TopAppBar.styles';
import UserPanel from './UserPanel/UserPanel';

const TopAppBar = () => {
  const intl = useIntl();

  const classes = styles();
  const { header, menuButton, title, search, searchIcon, inputRoot, inputInput } = classes;

  const searchPlaceholder = intl.formatMessage({
    id: `topAppBar.searchPlaceholder`,
    description: `Search placeholder`,
    defaultMessage: `Search`,
  });

  return (
    <div className={header}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={menuButton} color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className={title} variant="h6" noWrap>
            <FormattedMessage
              id="topAppBar.titleText"
              description="App title"
              defaultMessage="OverShop"
            />
          </Typography>
          <div className={search}>
            <div className={searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={searchPlaceholder}
              classes={{
                root: inputRoot,
                input: inputInput,
              }}
            />
          </div>
          <UserPanel />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopAppBar;
