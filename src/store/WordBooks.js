import Item from 'store/Item';
import {action, observable} from 'mobx';

export default class WordBooks extends Item {
  @observable wordBooks = false;


}