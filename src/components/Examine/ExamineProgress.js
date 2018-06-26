import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from 'styles';


@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class LearnProgress extends React.Component {
  render() {
    const {store: {examine}} = this.props;
    return <LinearProgress value={examine.rightRate * 100}
                           valueBuffer={(examine.wrongRate + examine.rightRate) * 100}
                           variant={'buffer'}/>;
  }

}