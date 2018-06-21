import React from 'react';
import {withRouter} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import ToolTip from '@material-ui/core/Tooltip';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DeleteIcon from '@material-ui/icons/Delete';

@withStyles(styles)
@withRouter
@inject('store')
@observer
export default class LearningState extends React.Component {
  componentWillMount() {
    if (this.props.store.word.isAuth)
      this.props.store.word.getLearningState();
  }

  updateLearning(state) {
    if (state === 0)
      this.props.store.word.learn();
    else
      this.props.store.word.forget();
  }

  render() {
    let {store: {word: {learningState: state}}, classes} = this.props;
    if (state === null)
      return <CircularProgress size={20}
                               className={classes.learningState}/>;
    return (
      <ToolTip title={state === 0 ? 'Add to learning plan' : 'Forgot this word'}>
        <IconButton className={classes.learningState}
                    onClick={() => {
                      this.updateLearning(state)
                    }}
        >
          {state === 0 ? <NoteAddIcon/> : <DeleteIcon/>}
        </IconButton>
      </ToolTip>
    );
  }
}