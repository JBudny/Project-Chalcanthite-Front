// @flow

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import { unsetAuth } from '../../../actions/authActions';

const UserAccountButton = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch(unsetAuth());
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (e: Event) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls="user-account-menu"
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="user-account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <FormattedMessage
            id="topAppBar.userPanel.profileButton.option.profile"
            description="Profile option"
            defaultMessage="Profile"
          />
        </MenuItem>
        <MenuItem>
          <FormattedMessage
            id="topAppBar.userPanel.profileButton.option.myAccount"
            description="My account option"
            defaultMessage="My account"
          />
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <FormattedMessage
            id="topAppBar.userPanel.profileButton.option.logOut"
            description="Log out option"
            defaultMessage="Log out"
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserAccountButton;
