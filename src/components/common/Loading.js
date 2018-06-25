import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from 'styles';

@withStyles(styles)
export default class Loading extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.loading}>
        <CircularProgress/>
      </Card>
    );
  }

}
