import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class ExamineFinish extends React.Component {
  render() {
    const {store: {examine}, history, classes} = this.props;
    return (
      <CardContent>
        <Typography variant={'headline'}
                    className={classes.examineFinishTitle}
                    color={'primary'}
                    gutterBottom
        >Finish examine!</Typography>
        <Typography variant={'title'}>Wrong answers:</Typography>
        <List>
          {examine.wrongs.map(word => (
            <ListItem key={word} button onClick={() => history.push(`/word/${word}`)}>
              <ListItemText>
                {word}
              </ListItemText>
            </ListItem>))}
        </List>
        <Typography variant={'title'}>Correct answers:</Typography>
        <List>
          {examine.rights.map(word => (
            <ListItem key={word} button onClick={() => history.push(`/word/${word}`)}>
              <ListItemText>
                {word}
              </ListItemText>
            </ListItem>))}
        </List>

      </CardContent>
    )
  }
}