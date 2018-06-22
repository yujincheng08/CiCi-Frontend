import React from "react";
import {withStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import styles from 'styles';
import Typography from '@material-ui/core/Typography'

@withStyles(styles)
export default class Banner extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <CardContent className={classes.banner}>
          <Typography className={classes.bannerTitle} component={'h1'} variant={'title'}>
           CiCi
          </Typography>
        <Typography className={classes.bannerDescription} component={'h2'} variant={'headline'}>
          A word memorizing website designed by YU Jincheng
        </Typography>
      </CardContent>
    );
  }

}