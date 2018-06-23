import Item from 'store/Item';
import {action, observable} from 'mobx';
import superagent from 'superagent';

export default class WordBooks extends Item {
  @observable wordBooks = {};

  @action getAllWordbooks() {
    return superagent.get(`/api/wordbook`)
      .use(this.tokenPlugin)
      .then(({body}) => {
        Object.keys(body).map(key => body[key].state = undefined);
        this.wordBooks = body;
      }).catch(err => this.setError(err.response.body.errors));
  }

  @action clear() {
    this.wordBooks = {};
  }

  @action getUsing(wordbook) {
    return superagent.get(`/api/using/${wordbook}`)
      .use(this.tokenPlugin)
      .then(({body: {state}}) => {
        this.wordBooks[wordbook].state = state;
      }).catch(err => this.setError(err.response.body.errors));
  }

  @action use(wordbook) {
    return superagent.post(`/api/using/${wordbook}`)
      .use(this.tokenPlugin)
      .then(({body: {name, state}}) => {
        this.wordBooks[name].state = state;
      }).catch(err => this.setError(err.response.body.errors));
  }

  @action discard(wordbook) {
    return superagent.delete(`/api/using/${wordbook}`)
      .use(this.tokenPlugin)
      .then(() => {
        this.wordBooks[wordbook].state = 0;
      }).catch(err => this.setError(err.response.body.errors));
  }
}