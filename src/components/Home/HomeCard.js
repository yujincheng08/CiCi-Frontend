import React from "react";
import {withStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import styles from 'styles';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'

@withStyles(styles)
export default class HomeCards extends React.Component {
  render() {
    const {classes, Icon, title, description, onClick} = this.props;
    return (
      <Card className={classes.homeCard} onClick={onClick}>
        <CardContent className={classes.homeCardContent}>
          <Icon className={classes.homeCardIcon}/>
          <Typography variant={'headline'} className={classes.homeCardTitle}>{title}</Typography>
          <Typography color={"textSecondary"} className={classes.homeCardDescription}>{description}</Typography>
        </CardContent>
      </Card>
    );
  }
}