import {action, autorun, observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PasswordField from 'components/common/PasswordField';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles'
import styles from 'styles';

@withRouter
@inject('store')
@observer
@withStyles(styles)
export default class Register extends React.Component {

  @observable confirmedPassword = '';
  @observable password = '';

  componentWillMount() {
    autorun(() => {
      if (this.password === this.confirmedPassword && this.password.length > 0)
        this.props.store.auth.setPassword(this.password);
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.store.auth.register()
      .then(() => this.props.history.replace('/'));
  };

  componentWillUnmount() {
    this.props.store.auth.reset();
    action(() => {
      this.confirmedPassword = '';
      this.password = '';
    })
  }

  render() {
    const {classes, store: {auth}} = this.props;
    const {values, progressing} = auth;
    return (
      <form onSubmit={this.onSubmit} className={classes.accountForm}>
        <TextField label={"Username"}
                   fullWidth required
                   value={values.username}
                   onChange={e => {
                     auth.setUsername(e.target.value);
                   }}
                   className={classes.accountFormItem}
        />
        <TextField label={"Email"}
                   fullWidth required
                   inputProps={{pattern: '\\S+@\\S+\\.\\S+'}}
                   value={values.email}
                   onChange={e => {
                     auth.setEmail(e.target.value);
                   }}
                   className={classes.accountFormItem}
        />
        <PasswordField label={"Password"}
                       fullWidth required
                       onChange={
                         action(e => this.password = e.target.value)
                       }
                       value={this.password}
                       className={classes.accountFormItem}
        />
        <PasswordField label={"Confirm password"}
                       fullWidth required
                       onChange={
                         action(e => this.confirmedPassword = e.target.value)
                       }
                       value={this.confirmedPassword}
                       className={classes.accountFormItem}
        />
        <Button variant={"raised"}
                type={"submit"}
                fullWidth
                disabled={progressing}
                className={classes.accountFormItem}
        >Register</Button>
      </form>
    );
  }
}
