import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import {withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from 'styles';


@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class LearnProgress extends React.Component {
  render() {
    const {store: {learn}} = this.props;
    return <LinearProgress value={learn.rate * 100} variant={'determinate'}/>;
  }

}