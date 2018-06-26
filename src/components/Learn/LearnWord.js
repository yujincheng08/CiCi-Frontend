import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';
import WordTitle from 'components/Word/WordTitle';
import Definition from 'components/Word/Definition';
import Typography from '@material-ui/core/Typography';
import Examples from 'components/Word/Examples';


@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class LearnWord extends React.Component {

  render() {
    const {classes, onNext} = this.props;
    const {word, wordData} = this.props.store.word;
    return (
      <CardContent className={classes.learnWord}>
        <CardContent className={classes.learnWordDetail}>
          {word !== null ? <WordTitle wordData={wordData}/> :
            <Typography className={classes.wordTitleWord}>word not found</Typography>}
          {word !== null ? <Definition definitions={wordData['defs']}/> : null}
          {word !== null ? <Examples examples={wordData['sams']}/> : null}
        </CardContent>
        <Button variant={'raised'}
                onClick={onNext}
                color={'primary'}
                className={classes.learnWordNext}
        >Next</Button>
      </CardContent>
    );
  }

}