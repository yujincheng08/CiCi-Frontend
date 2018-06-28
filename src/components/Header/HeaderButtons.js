import React from "react";
import {inject, observer} from "mobx-react";
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';
import {NavLink} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import {withRouter} from 'react-router-dom';

@withRouter
@withStyles(styles)
@inject("store")
@observer
export default class HeaderButtons extends React.Component {
  state = {
    anchorEle: null,
  };

  handleMenu = event => {
    this.setState({anchorEle: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEle: null});
  };

  render() {
    const {store: {auth, profile}, classes} = this.props;
    const {anchorEle} = this.state;
    const open = Boolean(anchorEle);
    return (
      <form className={classes.headerButtons} noValidate autoComplete="off">
        <Avatar
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
          className={classes.avatar}
        >
          {auth.isAuth ? profile.username[0] : <AccountCircle/>}
        </Avatar>
        <Menu
          id="account-menu"
          anchorEl={anchorEle}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          {auth.isAuth ? null :
            <MenuItem component={NavLink} to={"/register"} onClick={this.handleClose}>Register</MenuItem>}
          {auth.isAuth ? null : <MenuItem component={NavLink} to={"/login"} onClick={this.handleClose}>Login</MenuItem>}
          {auth.isAuth ?
            <MenuItem component={NavLink} to={"/profile"} onClick={this.handleClose}>Profile</MenuItem> : null}
          {auth.isAuth ?
            <MenuItem component={NavLink} to={"/logout"} onClick={this.handleClose}>Logout</MenuItem> : null}
        </Menu>
      </form>
    );
  }
}