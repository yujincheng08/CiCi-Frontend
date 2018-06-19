import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import styles from 'styles';

@withStyles(styles)
export default class Definition extends React.Component {

  render() {
    const {definitions} = this.props;
    return (
      <CardContent>
        {definitions.map(({pos, def})=>{
        return (
          <CardActions key={`${pos}${def}`}>
            <Typography color={"textSecondary"} component={"span"}>{pos}</Typography>
            <Typography component={"span"}>{def}</Typography>
          </CardActions>
        )})}
        </CardContent>
    );
  }
}