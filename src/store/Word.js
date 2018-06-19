import Item from 'store/Item';
import {action, observable, computed} from 'mobx';
import superagent from 'superagent';

export default class Word extends Item {
  @observable progressing = false;

  @observable error = undefined;

  @observable word = null;

  @observable wordData = null;

  @action query(word) {
    this.progressing = true;
    this.error = undefined;

    return superagent.get(`/api/word/${word}`)
      .then(({body}) => {
        this.wordData = body;
        this.word = body.word || null;
      })
      .catch(action(err => this.error = err))
      .finally(action(() => this.progressing = false));
  }

  @action reset() {
    this.word = null;
    this.wordData = null;
  }

}