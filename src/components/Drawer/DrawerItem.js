import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from 'styles';
import {withStyles} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';

@withStyles(styles)
export default class Item extends React.Component {
  render() {
    const {to, onClick, name, classes, exact} = this.props;
    return (
      <ListItem button style={{whiteSpace: 'nowrap'}}
                component={NavLink}
                to={to}
                onClick={onClick}
                exact={exact}
                activeClassName={classes.checked}
      >
        <ListItemIcon>
          {this.props.children}
        </ListItemIcon>
        <ListItemText primary={name}/>
      </ListItem>
    )
  }
}
