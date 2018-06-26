import Item from 'store/Item';
import {action, observable, computed} from 'mobx';
import superagent from 'superagent';
import _ from 'lodash';

export default class Examine extends Item {
  @observable rights = [];
  @observable wrongs = [];
  @observable pending = [];
  @observable data = observable.map();
  @observable loading = false;
  @observable testingWord = null;
  @observable otherOptions = null;

  @action getExamine() {
    this.loading = true;
    this.reset();
    return superagent.get(`/api/examine/`)
      .use(this.tokenPlugin)
      .then(({body}) => body)
      .then(all =>
        Promise.all(all.map(word =>
          superagent.get(`/api/word/${word}`)
        )))
      .then(all => all.reduce((total, {body}) => {
        if (body['word'] != null)
          total.set(body['word'], body);
        return total;
      }, this.data))
      .then(() => this.pending = Array.from(this.data.keys()))
      .then(() => this.sampleOne())
      .then(action(() => {
        this.loading = false
      })).catch(err => this.setError(err.response.body.errors));
    //.catch(err => this.setError({'Internal error': err.toString()}));
  }

  @computed get rightRate() {
    return this.rights.length / (this.pending.length + this.rights.length + this.wrongs.length);
  }

  @computed get wrongRate() {
    return this.wrongs.length / (this.pending.length + this.rights.length + this.wrongs.length);
  }

  @action know() {
    return superagent.patch(`/api/learning/${this.learningWord}`)
      .use(this.tokenPlugin)
      .then(action(({body: word}) => {
        let idx = this.learning.indexOf(word);
        if (idx > -1)
          this.learning.splice(idx, 1);
        this.finished.push(word);
      })).catch(err => this.setError(err.response.body.errors));
  }

  @action right() {
    let idx = this.pending.indexOf(this.testingWord);
    if (idx > -1)
      this.pending.splice(idx, 1);
    this.rights.push(this.testingWord);
    this.sampleOne();
  }

  @action wrong() {
    let idx = this.pending.indexOf(this.testingWord);
    if (idx > -1)
      this.pending.splice(idx, 1);
    this.wrongs.push(this.testingWord);
    this.sampleOne();
  }

  @action sampleOne() {
    this.testingWord = _.sample(this.pending.slice());
    let all = Array.from(this.data.keys());
    all.splice(all.indexOf(this.testingWord), 1);
    this.otherOptions = _.sampleSize(all, 3);
  }

  @computed get finished() {
    return this.pending.length === 0;
  }

  @action reset() {
    this.data.clear();
    this.rights = [];
    this.wrongs = [];
    this.pending = [];
  }

}