import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import styles from 'styles';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class WordBookCard extends React.Component {
  componentWillMount() {
    if (this.props.store.isAuth)
      this.props.store.wordbooks.getUsing(this.props.name);
  }

  use() {
    this.props.store.wordbooks.use(this.props.name);
  }

  discard() {
    this.props.store.wordbooks.discard(this.props.name);
  }

  render() {
    const {classes, name, history, store: {wordbooks}} = this.props;
    const wordbook = wordbooks.wordBooks[name];
    return (
      <Card className={classes.wordbookCard}>
        <CardContent className={classes.wordbookCardContent} onClick={() => history.push(`/wordbooks/${name}`)}>
          <Typography variant={'headline'} className={classes.wordbookCardTitle} gutterBottom>{name}</Typography>
          <Typography color={"textSecondary"}
                      className={classes.wordbookCardDescription}>{`Total words: ${wordbook.length}`}</Typography>
        </CardContent>
        <CardActions>
          {wordbooks.isAuth && wordbook.state !== undefined ?
            (wordbook.state === 0 ?
              <Button size="small" color="primary" onClick={() => this.use()}>Use it</Button> :
              <Button size={"small"} color={"primary"} onClick={() => this.discard()}>Discard it</Button>)
            : null}
        </CardActions>
      </Card>
    );
  }
}