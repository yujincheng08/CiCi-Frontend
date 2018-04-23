import React from 'react';
import {NavLink} from 'react-router-dom';
import List, {ListItem, ListItemText} from 'material-ui/List';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
export default class Header extends React.Component {
  render() {
    const {auth} = this.props.store;
    return (
      <List>
        <nav id={"header"}>
          <ListItem component={NavLink} to={"/"} button>
            <ListItemText primary={"Home"}/>
          </ListItem>
          {!auth.isAuth ? null :
            <ListItem component={NavLink} to={"/register"} button>
              <ListItemText primary={"Register"}/>
            </ListItem>}
          {!auth.isAuth ? null :
            <ListItem component={NavLink} to={"/login"} button>
              <ListItemText primary={"Login"}/>
            </ListItem>}
          {auth.isAuth ? null :
            <ListItem component={NavLink} to={"/logout"} button>
              <ListItemText primary={"Logout"}/>
            </ListItem>}
        </nav>
      </List>
    );
  }
}