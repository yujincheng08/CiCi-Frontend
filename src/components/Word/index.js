import React from 'react';
import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import Loading from 'components/common/Loading';
import CircularProgress from '@material-ui/core/CircularProgress';
import WordTitle from 'components/Word/WordTitle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Definition from 'components/Word/Definition';
import Examples from 'components/Word/Examples';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';
import Typography from "@material-ui/core/es/Typography/Typography";

@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class Word extends React.Component {
  componentWillMount() {
    let {word} = this.props.match.params;
    this.props.store.word.query(word);
  }

  componentWillUpdate(nextProps, nextState, snapshot) {
    let {word: oldWord} = this.props.match.params;
    let {word} = nextProps.match.params;
    if (oldWord !== word)
      this.props.store.word.query(word);
  }

  componentWillUnmount() {
    this.props.store.word.reset();
  }

  render() {
    const {classes} = this.props;
    const {word, wordData, progressing} = this.props.store.word;
    if (progressing)
      return (<Loading/>);
    return (
      <Card className={classes.wordCard}>
        <CardContent>
          {word !== null ? <WordTitle wordData={wordData}/> :
            <Typography className={classes.wordTitleWord}>word not found</Typography>}
          {word !== null ? <Definition definitions={wordData['defs']}/> : null}
          {word !== null ? <Examples examples={wordData['sams']}/> : null}
        </CardContent>
      </Card>
    );
  }
}