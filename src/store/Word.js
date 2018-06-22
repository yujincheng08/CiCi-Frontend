import Item from 'store/Item';
import {action, observable, computed} from 'mobx';
import superagent from 'superagent';

export default class Word extends Item {
  @observable progressing = false;

  @observable word = null;

  @observable wordData = null;

  @observable learningState = null;

  @action query(word) {
    this.progressing = true;
    this.resetError();

    return superagent.get(`/api/word/${word}`)
      .then(({body}) => {
        this.wordData = body;
        this.word = body.word || null;
      })
      .catch(err => this.setError(err.response.body.errors))
      .finally(action(() => this.progressing = false));
  }

  @action getLearningState() {
    return superagent.get(`/api/learning/${this.word}`)
      .use(this.tokenPlugin)
      .then(({body}) => {
        this.learningState = body.state;
      }).catch(err => this.setError(err.response.body.errors));
  }

  @action reset() {
    this.word = null;
    this.wordData = null;
    this.learningState = null;
  }

  @action forget() {
    return superagent.delete(`/api/learning/${this.word}`)
      .use(this.tokenPlugin)
      .then(() => {
        this.learningState = 0;
      }).catch(err => this.setError(err.response.body.errors));
  }

  @action learn() {
    return superagent.post(`/api/learning/${this.word}`)
      .use(this.tokenPlugin)
      .then(({body}) => {
        this.learningState = body.state;
      }).catch(err => this.setError(err.response.body.errors));
  }

}