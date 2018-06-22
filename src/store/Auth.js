import Item from 'store/Item';
import {action, observable, computed} from 'mobx';
import superagent from 'superagent';

export default class Auth extends Item {
  @observable progressing = false;

  @observable values = {
    username: '',
    email: '',
    password: '',
  };

  @action setUsername(username) {
    this.values.username = username;
  }

  @action setEmail(email) {
    this.values.email = email;
  }

  @action setPassword(password) {
    this.values.password = password;
  }

  @action reset() {
    this.values.username = '';
    this.values.password = '';
    this.values.email = '';
  }


  @action throwError() {

  }

  @action login() {
    this.progressing = true;
    this.resetError();
    const {email, password} = this.values;

    return superagent.post(`/api/session`)
      .send({user: {email, password}})
      .then(({body: {user}}) => {
        this.setToken(user.token);
        this.reset();
      })
      .catch(err => this.setError(err.response.body.errors))
      .finally(action(() => this.progressing = false));
  }

  @action register() {
    this.progressing = true;
    this.resetError();
    const {username, email, password} = this.values;
    return superagent.put(`/api/user`)
      .send({user: {username, email, password}})
      .then(({body: {user}}) => {
        this.setToken(user.token);
        this.reset();
      }).catch(err => this.setError(err.response.body.errors))
      .finally(action(() => this.progressing = false));
  }

  @action logout() {
    this.setToken(undefined);
    return Promise.resolve();
  }
}
