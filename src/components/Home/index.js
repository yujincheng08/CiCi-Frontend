import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Banner from 'components/Home/Banner';
import HomeCards from 'components/Home/HomeCards';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';


@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class Home extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.home}>
        <Banner/>
      <HomeCards/>
      </Card>
    );
  }

}