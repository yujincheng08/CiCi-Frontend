import React from 'react';
import {observer, inject} from 'mobx-react';
import {action} from 'mobx';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import styles from 'styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PasswordField from 'components/common/PasswordField';
import Card from '@material-ui/core/Card';
import Loading from 'components/common/Loading';

@withRouter
@withStyles(styles)
@inject('store')
@observer
export default class Profile extends React.Component {

  componentWillMount() {
    this.props.store.profile.reset();
  }

  update(event) {
    event.preventDefault();
    this.props.store.profile.patch();
  }

  render() {
    const {classes, store: {profile}} = this.props;
    if (profile.retrieving)
      return (<Loading/>);
    return (
      <Card className={classes.profile}>
        <form onSubmit={this.onSubmit} className={classes.profileForm}>
          <TextField label={"Username"}
                     fullWidth required
                     inputProps={{pattern: '.{6,}'}}
                     value={profile.newUsername}
                     onChange={action(e => profile.newUsername = e.target.value)}
                     className={classes.accountFormItem}
          />
          <TextField label={"Email"}
                     fullWidth required
                     inputProps={{pattern: '\\S+@\\S+\\.\\S+'}}
                     onChange={action(e => profile.newEmail = e.target.value)}
                     value={profile.newEmail}
                     className={classes.accountFormItem}
          />
          <PasswordField label={"Password"}
                         fullWidth
                         onChange={action(e => profile.password = e.target.value)}
                         inputProps={{pattern: '.{6,}'}}
                         value={profile.password}
                         className={classes.accountFormItem}
          />
          <PasswordField label={"Confirm password"}
                         fullWidth
                         onChange={action(e => profile.confirmPassword = e.target.value)}
                         inputProps={{pattern: '.{6,}'}}
                         value={profile.confirmPassword}
                         className={classes.accountFormItem}
          />
          <Button variant={"raised"}
                  type={"submit"}
                  fullWidth
                  onClick={e => this.update(e)}
                  className={classes.accountFormItem}
          >Update</Button>
        </form>
      </Card>
    );
  }
}