import {action, computed, observable, reaction} from 'mobx';

export default class Item {
  @observable static token = window.localStorage.getItem('jwt');
  @observable static error = {
    message: undefined,
    open: false
  };

  @action
  setToken(token) {
    Item.token = token;
  }


  @action setError(error) {
    console.log(error);
    Item.error.message = error;
    Item.error.open = true;
  }

  @action resetError() {
    Item.error.message = undefined;
    Item.error.open = false;
  }

  @action closeError() {
    Item.error.open = false;
  }

  @computed get isAuth() {
    return Item.token !== null;
  }

  @computed get error() {
    return Item.error;
  }

  @action
  clearToken() {
    this.setToken(null);
  }

  tokenPlugin = (agent) => {
    if (Item.token)
      agent.set('authorization', `Bearer ${Item.token}`)
  };

  constructor() {
    reaction(() => Item.token, token =>
      token ? window.localStorage.setItem('jwt', token)
        : window.localStorage.removeItem('jwt')
    )
  }
}