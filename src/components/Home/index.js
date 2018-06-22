import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import TranslateIcon from '@material-ui/icons/Translate';
import SchoolIcon from '@material-ui/icons/School';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import styles from 'styles';


@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class Home extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.home}>
        <TranslateIcon/>
        <SchoolIcon/>
        <LibraryBooksIcon/>
      </Paper>
    );
  }

}