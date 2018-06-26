import Profile from 'store/Profile';
import Auth from 'store/Auth';
import Word from 'store/Word';
import Options from 'store/Options';
import Item from 'store/Item';
import WordBooks from 'store/WordBooks';
import Learn from 'store/Learn';
import Examine from "store/Examine";

class Store extends Item {
  profile = new Profile;
  auth = new Auth;
  word = new Word;
  options = new Options;
  wordbooks = new WordBooks;
  learn = new Learn;
  examine = new Examine;
}


export default new Store();
