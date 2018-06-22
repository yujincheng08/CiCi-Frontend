import React from "react";
import {withStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import styles from 'styles';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'

@withStyles(styles)
export default class HomeCards extends React.Component {
  render() {
    const {classes, Icon, title, description} = this.props;
    console.log(Icon);
    return (
        <Card className={classes.homeCard}>
          <CardContent>
            <Icon/>
            <Typography>{title}</Typography>
            <Typography>{description}</Typography>
          </CardContent>
        </Card>
    );
  }
}