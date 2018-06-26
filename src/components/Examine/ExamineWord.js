import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ExamineOption from 'components/Examine/ExamineOption';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';
import _ from 'lodash';


@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class ExamineWord extends React.Component {

  render() {
    const {onRight, onWrong, store: {examine}} = this.props;
    let options = examine.otherOptions.map(word => (
      <ExamineOption key={word} defs={examine.data.get(word)['defs']} onClick={onWrong}/>
    ));
    options.push(<ExamineOption key={examine.testingWord}
                                defs={examine.data.get(examine.testingWord)['defs']}
                                onClick={onRight}/>);
    return (
      <CardContent>
        <List>
          {_.shuffle(options)}
        </List>
      </CardContent>
    );
  }

}