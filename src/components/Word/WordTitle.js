import React from 'react';
import {withRouter} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Pronunciation from 'components/Word/Pronunciation';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';

@withStyles(styles)
@withRouter
@inject('store')
@observer
export default class WordTitle extends React.Component {
  render() {
    const {classes, wordData} = this.props;
    if(!wordData['pronunciation']) wordData['pronunciation'] = {};
    const {word, pronunciation: {AmE, AmEmp3, BrE, BrEmp3} = {}} = wordData;
    console.log(wordData);
    return (
        <CardActions>
          <Typography className={classes.wordTitleWord}>{word}</Typography>
          {AmE ? <Typography className={classes.wordTitlePronunciation} color="textSecondary">US: /{AmE}/</Typography> : null}
          {AmE && AmEmp3 ? <Pronunciation url={AmEmp3}/>:null}
          {BrE ? <Typography className={classes.wordTitlePronunciation} color="textSecondary">UK: /{BrE}/</Typography> : null}
          {BrE && BrEmp3 ? <Pronunciation url={BrEmp3}/>:null}
        </CardActions>
    );
  }
}