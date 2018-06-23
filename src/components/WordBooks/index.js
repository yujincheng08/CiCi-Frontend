import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';
import WordBookCard from 'components/WordBooks/WordBookCard';

@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class WordBooks extends React.Component {
  componentWillMount() {
    this.props.store.wordbooks.getAllWordbooks();
  }

  componentWillUnmount() {
    this.props.store.wordbooks.clear();
  }

  render() {
    const {classes, store: {wordbooks: {wordBooks}}} = this.props;
    return (
      <Paper className={classes.wordbooks}>
        {Object.keys(wordBooks).map(name =>
          <WordBookCard key={name} name={name}/>)}
      </Paper>
    );
  }

}