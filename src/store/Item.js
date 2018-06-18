import {action, computed, observable, reaction} from 'mobx';

export default class Item {
  @observable static token = window.localStorage.getItem('jwt');

  @action
  setToken(token) {
    Item.token = token;
  }

  @computed get isAuth() {
    return Item.token !== null;
  }

  @action
  clearToken() {
    this.setToken(undefined);
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