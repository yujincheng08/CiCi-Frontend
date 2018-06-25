import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';
import SelfCheckTitle from 'components/Learn/SelfCheckTitle';
import Button from '@material-ui/core/Button';
import Loading from 'components/common/Loading';


@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class SelfCheck extends React.Component {
  componentWillMount() {
    this.props.store.word.query(this.props.word);
  }

  render() {
    const {classes, onKnow, onLearn} = this.props;
    const {wordData, progressing} = this.props.store.word;
    if (progressing)
      return (
        <Loading/>
      );
    return (
      <CardContent className={classes.selfCheck}>
        <SelfCheckTitle wordData={wordData}/>
        <CardContent className={classes.selfCheckButtons}>
          <Button size={'large'}
                  variant={'raised'}
                  className={classes.selfCheckButton}
                  color={"primary"}
                  onClick={onKnow}
          >Know it</Button>
          <Button size={'large'}
                  variant={'raised'}
                  className={classes.selfCheckButton}
                  onClick={onLearn}
          >Learn it</Button>
        </CardContent>
      </CardContent>
    );
  }

}