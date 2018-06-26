import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';
import Loading from 'components/common/Loading';
import LearnProgress from 'components/Learn/LearnProgress';
import styles from 'styles';
import SelfCheck from 'components/Learn/SelfCheck';
import LearnWord from 'components/Learn/LearnWord';
import LearnFinish from "components/Learn/LearnFinish";


@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class Learn extends React.Component {
  state = {
    step: 1
  };

  componentWillMount() {
    this.props.store.learn.getLearning();
  }

  componentWillUnmount() {
    this.props.store.learn.reset();
  }


  know() {
    this.props.store.learn.know();
    this.learn()
  }

  learn() {
    this.setState({step: 2});
  }

  next() {
    this.props.store.learn.sampleOne();
    this.setState({step: 1});
  }

  render() {
    const {classes, store: {learn}} = this.props;
    if (learn.loading) return (<Loading/>);
    if (learn.finish)
      return (
        <Card className={classes.learn}>
          <LearnFinish/>
        </Card>
      );
    return (
      <Card className={classes.learn}>
        <CardContent>
          <LearnProgress/>
        </CardContent>
        {this.state.step === 1 ? <SelfCheck word={learn.learningWord}
                                            onKnow={() => this.know()}
                                            onLearn={() => this.learn()}
        /> : null}
        {this.state.step === 2 ? <LearnWord word={learn.learningWord}
                                            onNext={() => this.next()}
        /> : null}
      </Card>
    );
  }

}