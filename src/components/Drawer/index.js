import React from "react";
import {inject, observer} from "mobx-react";
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import styles from 'styles';
import DrawerItem from 'components/Drawer/DrawerItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import TranslateIcon from '@material-ui/icons/Translate';
import SchoolIcon from '@material-ui/icons/School';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import {withRouter} from 'react-router-dom';

@withRouter
@withStyles(styles)
@inject("store")
@observer
export default class SideBar extends React.Component {
  render() {
    const {classes, store: {options}} = this.props;
    const {drawerOpened} = options;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !drawerOpened && classes.drawerPaperClose),
        }}
        open={drawerOpened}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => options.toggleDrawer(false)}>
            <ChevronLeftIcon/>
          </IconButton>
        </div>
        <Divider/>
        <List component={"nav"} id={"drawer-items"}>
          <DrawerItem onClick={() => options.toggleDrawer(false)} to={"/"}
                      name={"Home"}
          >
            <HomeIcon/>
          </DrawerItem>
          <DrawerItem onClick={() => options.toggleDrawer(false)} to={"/learn"}
                      name={"Learn"}
          >
            <SchoolIcon/>
          </DrawerItem>
          <DrawerItem onClick={() => options.toggleDrawer(false)} to={"/examine"}
                      name={"Examine"}
          >
            <TranslateIcon/>
          </DrawerItem>
          <DrawerItem onClick={() => options.toggleDrawer(false)} to={"/wordbooks"}
                      name={"Wordbooks"}
          >
            <LibraryBooksIcon/>
          </DrawerItem>
        </List>
      </Drawer>
    );
  }
}
