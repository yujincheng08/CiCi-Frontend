import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';
import Loading from 'components/common/Loading';
import ExamineProgress from 'components/Examine/ExamineProgress'
import CardContent from '@material-ui/core/CardContent';
import ExamineWord from 'components/Examine/ExamineWord';
import ExamineFinish from 'components/Examine/ExamineFinish';
import SelfCheckTitle from "components/Learn/SelfCheckTitle";


@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class Examine extends React.Component {
  componentWillMount() {
    if (this.props.store.isAuth)
      this.props.store.examine.getExamine();
    else
      this.props.history.push('/login');
  }

  componentWillUnmount() {
    this.props.store.examine.reset();
  }

  right() {
    this.props.store.examine.right();
  }

  wrong() {
    this.props.store.examine.wrong();
  }


  render() {
    const {classes, store: {examine}} = this.props;
    if (examine.loading)
      return (<Loading/>);
    return (
      <Card className={classes.examine}>
        {examine.finished ?
          <ExamineFinish/> :
          <CardContent>
            <ExamineProgress/>
            <SelfCheckTitle wordData={examine.data.get(examine.testingWord)}/>
            <ExamineWord onRight={() => this.right()} onWrong={() => this.wrong()}/>
          </CardContent>}
      </Card>
    );
  }

}