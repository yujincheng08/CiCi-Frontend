import React from 'react';
import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

@withRouter
@inject('store')
@observer
export default class Word extends React.Component {
  componentWillMount() {
    let {word} = this.props.match.params;
    this.props.store.word.query(word);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let {word: oldWord} = prevProps.match.params;
    let {word} = this.props.match.params;
    if (oldWord !== word)
      this.props.store.word.query(word);
  }

  componentWillUnmount() {
    this.props.store.word.reset();
  }

  render() {
    const {word, wordData, progressing} = this.props.store.word;
    if (progressing)
      return (
        <CircularProgress/>
      );
    return (
      <div>
        <span>
          {word || "Word Not found"}
        </span>
      </div>
    );
  }
}