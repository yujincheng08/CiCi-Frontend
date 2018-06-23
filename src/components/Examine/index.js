import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';


@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class Examine extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.examine}>
      </Card>
    );
  }

}