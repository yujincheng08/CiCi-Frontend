import Profile from 'store/Profile';
import Auth from 'store/Auth';
import Word from 'store/Word';
import Options from 'store/Options';
import Item from 'store/Item';

class Store extends Item {
  profile = new Profile;
  auth = new Auth;
  word = new Word;
  options = new Options;
}


export default new Store();
