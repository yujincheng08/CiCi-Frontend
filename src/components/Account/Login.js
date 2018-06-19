import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {inject, observer} from 'mobx-react';
import PasswordField from 'components/common/PasswordField';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles'
import styles from 'styles';

@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class Login extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.store.auth.login()
      .then(() => this.props.history.replace('/'));
  };

  componentWillUnmount() {
    this.props.store.auth.reset();
  }

  render() {
    const {classes, store: {auth}} = this.props;
    const {values} = auth;
    return (
      <form onSubmit={this.onSubmit} className={classes.accountForm}>
        <TextField
          label={"Email"}
          fullWidth required
          inputProps={{pattern: '\\S+@\\S+\\.\\S+'}}
          onChange={e => auth.setEmail(e.target.value)}
          value={values.email}
          className={classes.accountFormItem}
        />
        <PasswordField
          label={"Password"}
          fullWidth required
          onChange={e => auth.setPassword(e.target.value)}
          value={values.password}
          className={classes.accountFormItem}
        />
        <Button variant={"raised"}
                type={"submit"}
                className={classes.accountFormItem}
                fullWidth
        >Login</Button>
        {auth.error === undefined ? null :
          <span>{auth.error.toString()}</span>
        }
      </form>
    )
  }
}