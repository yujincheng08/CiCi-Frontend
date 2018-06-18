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
import {ChevronLeft as ChevronLeftIcon, Home as HomeIcon} from '@material-ui/icons';
import {withRouter} from 'react-router-dom';

@withRouter
@withStyles(styles)
@inject("store")
@observer
export default class SideBar extends React.Component {
  render() {
    const {classes, store: {options: {drawerOpened}}} = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !drawerOpened && classes.drawerPaperClose),
        }}
        open={drawerOpened}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => this.props.store.options.toggleDrawer(false)}>
            <ChevronLeftIcon/>
          </IconButton>
        </div>
        <Divider/>
        <List component={"nav"} id={"drawer-items"}>
          <DrawerItem onClick={() => this.props.store.options.toggleDrawer(false)} to={"/"}
                      name={"Home"}
          >
            <HomeIcon/>
          </DrawerItem>


          {/*<nav id={"header"}>*/}
          {/*<ListItem component={NavLink} to={"/"} button>*/}
          {/*<ListItemText primary={"Home"}/>*/}
          {/*</ListItem>*/}
          {/*{!auth.isAuth ? null :*/}
          {/*<ListItem component={NavLink} to={"/register"} button>*/}
          {/*<ListItemText primary={"Register"}/>*/}
          {/*</ListItem>}*/}
          {/*{!auth.isAuth ? null :*/}
          {/*<ListItem component={NavLink} to={"/login"} button>*/}
          {/*<ListItemText primary={"Login"}/>*/}
          {/*</ListItem>}*/}
          {/*{auth.isAuth ? null :*/}
          {/*<ListItem component={NavLink} to={"/logout"} button>*/}
          {/*<ListItemText primary={"Logout"}/>*/}
          {/*</ListItem>}*/}
          {/*</nav>*/}
        </List>
      </Drawer>
    );
  }
}
