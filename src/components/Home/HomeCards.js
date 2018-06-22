import React from "react";
import {withStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import styles from 'styles';
import TranslateIcon from '@material-ui/icons/Translate';
import SchoolIcon from '@material-ui/icons/School';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HomeCard from 'components/Home/HomeCard';
import {withRouter} from 'react-router-dom';

@withRouter
@withStyles(styles)
export default class HomeCards extends React.Component {
  render() {
    const {classes, history} = this.props;
    return (
      <CardContent className={classes.homeCards}>
        <HomeCard Icon={TranslateIcon}
                  title={'Examine'}
                  description={'Test words you have learnt'}
                  onClick={() => history.push('/examine')}
        />
        <HomeCard Icon={SchoolIcon}
                  title={'Learn'}
                  description={'Learn today\'s new words!'}
                  onClick={() => history.push('/learn')}
        />
        <HomeCard Icon={LibraryBooksIcon}
                  title={'Wordbooks'}
                  onClick={() => history.push('/wordbooks')}
                  description={'Choose word book to learn'}
        />
      </CardContent>
    );
  }

}