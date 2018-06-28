import Item from 'store/Item';
import {action, observable, autorun} from 'mobx';
import superagent from 'superagent';

export default class Profile extends Item {

  @observable retrieving = false;

  @observable username = "";

  @observable email = "";

  @observable newUsername = "";
  @observable newEmail = "";
  @observable password = "";
  @observable confirmPassword = "";
  //@observable avatar;

  // more and more

  constructor() {
    super();
    autorun(() => {
      if (!Item.token) return;
      this.retrieving = true;
      superagent.get(`/api/user/profile`)
        .use(this.tokenPlugin)
        .then(({body: user}) => this.update(user))
        .catch(err => this.setError(err.response.body.errors));

    });
  }

  @action update(info) {
    ({
      username: this.username,
      username: this.newUsername,
      email: this.email,
      email: this.newEmail,
      //avatar: this.avatar
    } = info);
    this.retrieving = false;
  }

  @action reset() {
    this.newUsername = this.username;
    this.newEmail = this.email;
    this.password = "";
    this.confirmPassword = "";
  }

  @action patch() {
    let user = {};
    if (this.newEmail)
      user['email'] = this.newEmail;
    if (this.newUsername)
      user['username'] = this.newUsername;
    if (this.password !== this.confirmPassword)
      return this.setError({password: 'not match'});
    else if (this.password)
      user['password'] = this.password;
    return superagent.patch('/api/user/profile')
      .send({user})
      .use(this.tokenPlugin)
      .then(({body: user}) => this.update(user))
      .catch(err => this.setError(err.response.body.errors));
  }
}