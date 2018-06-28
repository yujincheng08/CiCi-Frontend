import React from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';

@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class Logout extends React.Component {
  timeout = null;

  componentWillMount() {
    this.props.store.auth.logout();
    this.timeout = setTimeout(() => {
      this.props.history.push('/')
    }, 3000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    //clearTimeout();
  }

  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.logout}>
        <CardContent className={classes.logoutContent}>
          <Typography variant={'headline'} color={'primary'} gutterBottom>Logout Success.</Typography>
          <Typography variant={'title'}>Jumping to home page...</Typography>
        </CardContent>
      </Card>
    );
  }
}