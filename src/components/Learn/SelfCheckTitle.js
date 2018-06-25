import React from 'react';
import {withRouter} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Pronunciation from 'components/Word/Pronunciation';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';

@withStyles(styles)
@withRouter
@inject('store')
@observer
export default class SelfCheckTitle extends React.Component {
  render() {
    const {classes, wordData} = this.props;
    if (!wordData['pronunciation']) wordData['pronunciation'] = {};
    const {word, pronunciation: {AmE, AmEmp3, BrE, BrEmp3} = {}} = wordData;
    return (
      <CardContent className={classes.selfCheckTitle}>
        <Typography className={classes.wordTitleWord}>{word}</Typography>
        <CardActions>
          {AmE ? <Typography color="textSecondary">US: /{AmE}/</Typography> : null}
          {AmE && AmEmp3 ? <Pronunciation url={AmEmp3}/> : null}
          {BrE ? <Typography color="textSecondary">UK: /{BrE}/</Typography> : null}
          {BrE && BrEmp3 ? <Pronunciation url={BrEmp3}/> : null}
        </CardActions>
      </CardContent>
    );
  }
}