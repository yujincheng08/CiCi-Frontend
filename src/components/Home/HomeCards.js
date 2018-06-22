import React from "react";
import {withStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import styles from 'styles';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import TranslateIcon from '@material-ui/icons/Translate';
import SchoolIcon from '@material-ui/icons/School';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HomeCard from 'components/Home/HomeCard';

@withStyles(styles)
export default class HomeCards extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <CardContent className={classes.homeCards}>
        {/*<Typography className={classes.bannerTitle} component={'h1'} variant={'title'}>*/}
          {/*CiCi*/}
        {/*</Typography>*/}
        {/*<Typography className={classes.bannerDescription} component={'h2'} variant={'headline'}>*/}
          {/*A word memorizing website designed by YU Jincheng*/}
        {/*</Typography>*/}
        <HomeCard Icon={TranslateIcon} title={'Examine'} onClick={''} description={'Test words you have learnt'}/>
        <HomeCard Icon={SchoolIcon} title={'Learn'} onClick={''} description={'Learn today\'s new words!'}/>
        <HomeCard Icon={LibraryBooksIcon} title={'Word Books'} onClick={''} description={'Choose word book to learn'}/>
      </CardContent>
    );
  }

}