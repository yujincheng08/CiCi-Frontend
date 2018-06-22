import React from 'react';
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles/index';
import {observer, inject} from 'mobx-react';

@withStyles(styles)
@inject('store')
@observer
export default class ErrorSnackBar extends React.Component {
  render() {
    const {classes, store} = this.props;
    const {error: {open, message}} = store;
    let errors = message ? Object.keys(message).map(key =>
      typeof message[key] === "string" ? `${key} ${message[key]}` : ''
    ).join('') : null;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={2000}
        onClose={() => store.closeError()}
      >
        <SnackbarContent
          className={classes.errorSnackBar}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.errorMessage}>
              <ErrorIcon className={classes.errorIcon}/>
              {errors}
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => store.closeError()}
              >
              <CloseIcon/>
            </IconButton>
            </span>
          }
        />
      </Snackbar>
    );
  }
}