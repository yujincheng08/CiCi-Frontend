import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import {NavLink} from 'react-router-dom';

@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class WordBook extends React.Component {
  componentWillMount() {
    if (this.props.store.isAuth)
      this.props.store.wordbooks.getUsing(this.props.name);
    const {page = 1} = this.props;
    this.props.store.wordbooks.getWordbook(this.props.name, page);
  }

  componentWillUnmount() {
    this.props.store.wordbooks.clearWorkbook();
  }

  componentWillUpdate(nextProps, nextState, snapshot) {
    let {page: oldPage} = this.props;
    let {page} = nextProps;
    if (page !== oldPage)
      this.props.store.wordbooks.getWordbook(nextProps.name, page);
  }

  use() {
    this.props.store.wordbooks.use(this.props.name);
  }

  discard() {
    this.props.store.wordbooks.discard(this.props.name);
  }


  render() {
    const {classes, name, page = 1, store: {wordbooks}, history} = this.props;
    const wordbook = wordbooks.wordBooks[name];
    if (!wordbook) return null;
    return (
      <Card className={classes.wordbook}>
        <CardContent>
          <CardActions className={classes.wordbookTitleBar}>
            <Typography variant={'headline'} gutterBottom className={classes.wordbookTitle}>{name}</Typography>
            {wordbooks.isAuth && wordbook.state !== undefined ?
              (wordbook.state === 0 ?
                <Button size="small" color="primary" onClick={() => this.use()}>Use it</Button> :
                <Button size={"small"} color={"primary"} onClick={() => this.discard()}>Discard it</Button>)
              : null}
          </CardActions>
          <CardActions>
            <Button size={'small'}
                    color={'primary'}
                    disabled={page <= 1}
                    onClick={() => history.push(`/wordbooks/${name}/${page - 1}`)}
            >Previous Page</Button>
            <Button size={'small'}
                    color={'primary'}
                    disabled={page >= wordbook.length / 50}
                    onClick={() => history.push(`/wordbooks/${name}/${Number(page) + 1}`)}
            >Next Page</Button>
          </CardActions>
          <List component={CardContent}>
            {wordbooks.words.map(word =>
              <ListItem button key={word} to={`/word/${word}`} component={NavLink}>
                <ListItemText>{word}</ListItemText>
              </ListItem>
            )}
          </List>
        </CardContent>
      </Card>
    );
  }
}