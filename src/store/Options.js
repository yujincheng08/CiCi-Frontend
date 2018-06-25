import Item from 'store/Item';
import {action, observable} from 'mobx';

export default class Options extends Item {
  @observable drawerOpened = false;

  @action toggleDrawer(status) {
    if (status === undefined)
      this.drawerOpened = !this.drawerOpened;
    else
      this.drawerOpened = status;
  }

}