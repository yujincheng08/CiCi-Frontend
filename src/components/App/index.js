import React from 'react';
import {Route} from 'react-router-dom'
import Home from 'components/Home';
import Account from 'components/Account';
import Logout from 'components/Account/Logout';
import Word from 'components/Word';
import Learn from 'components/Learn';
import theme from 'styles/theme';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import Drawer from 'components/Drawer'
import Header from "components/Header";
import styles from 'styles';
import {withRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import ErrorSnackBar from 'components/App/ErrorSnackBar';
import Examine from 'components/Examine';
import WordBooks from 'components/WordBooks';

@withRouter
@withStyles(styles)
export default class App extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header/>
          <Drawer/>
          <ErrorSnackBar/>
          <main id="app" className={classes.content}>
            <div className={classes.toolbar}/>
            <Paper className={classes.mainPaper}>
              <Route exact path="/" component={Home}/>
              <Route path="/:action(login|register)" component={Account}/>
              <Route path="/logout" component={Logout}/>
              <Route path="/word/:word" component={Word}/>
              <Route path="/learn" component={Learn}/>
              <Route path="/examine" component={Examine}/>
              <Route path="/wordbooks/:wordbook?/:page?" component={WordBooks}/>
            </Paper>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}
