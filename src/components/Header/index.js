import React from 'react';
import {inject, observer} from 'mobx-react';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';
import HeaderButtons from 'components/Header/HeaderButtons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchBar from 'components/Header/SearchBar';
import {withRouter} from 'react-router-dom';

@withRouter
@inject('store')
@observer
@withStyles(styles)
export default class Header extends React.Component {

  render() {
    const {classes, store: {options: {drawerOpened}}} = this.props;

    return (
      <AppBar position={"absolute"} color={"primary"}
              className={classNames(classes.appBar, drawerOpened && classes.appBarShift)}>
        <Toolbar>
          <IconButton className={classNames(classes.menuButton, drawerOpened && classes.hide)} color={"inherit"}
                      aria-label={"Menu"}
                      onClick={() => this.props.store.options.toggleDrawer(true)}>
            <MenuIcon/>
          </IconButton>
          <Typography variant={"title"} color={"inherit"} className={classes.title}>
            CiCi
          </Typography>
          <SearchBar/>
          <HeaderButtons/>
        </Toolbar>
      </AppBar>
    );
  }
}