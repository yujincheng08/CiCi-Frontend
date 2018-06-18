import React from 'react';
import {inject, observer} from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Login from 'components/Account/Login';
import Register from 'components/Account/Register';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';

@withStyles(styles)
@inject('store')
@observer
export default class Account extends React.Component {

  render() {
    const {action} = this.props.match.params;
    const {classes} = this.props;

    return (
      <Paper className={classes.account}>
        <Tabs
          value={action}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab value={"login"} label={"Login"} component={Link} to={"/login"}/>
          <Tab value={"register"} label={"Register"} component={Link} to={"/register"}/>
        </Tabs>
        {action === 'login' ? <Login/> : null}
        {action === 'register' ? <Register/> : null}
      </Paper>
    );
  }
}