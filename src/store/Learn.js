import Item from 'store/Item';
import {action, observable, computed} from 'mobx';
import superagent from 'superagent';
import _ from 'lodash';

export default class Learn extends Item {
  @observable finished = [];
  @observable learning = [];
  @observable loading = false;
  @observable learningWord = null;

  @action getLearning() {
    this.loading = true;
    return superagent.get(`/api/learning/`)
      .use(this.tokenPlugin)
      .then(({body}) => {
        for (let word of Object.keys(body)) {
          if (body[word])
            this.finished.push(word);
          else
            this.learning.push(word);
        }
      }).then(() => this.sampleOne())
      .then(action(() => {
        this.loading = false
      })).catch(err => this.setError(err.response.body.errors));
  }

  @computed get rate() {
    return this.finished.length / (this.finished.length + this.learning.length);
  }

  @action know() {
    return superagent.patch(`/api/learning/${this.learningWord}`)
      .use(this.tokenPlugin)
      .then(action(({body: word}) => {
        let idx = this.learning.indexOf(word);
        if (idx > -1)
          this.learning.splice(idx);
        this.finished.push(word);
      })).catch(err => this.setError(err.response.body.errors));
  }

  @action sampleOne() {
    this.learningWord = _.sample(this.learning.slice());
  }

}