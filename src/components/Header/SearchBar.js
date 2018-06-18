import React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import styles from 'styles';

@withRouter
@withStyles(styles)
export default class SearchBar extends React.Component {
  state = {
    keyword: ""
  };

  keyDown(key) {
    if (key === 'Enter') {
      this.search();
    }
  }

  search() {
    if (this.state.keyword.length > 0)
      this.props.history.push(`/word/${this.state.keyword}`);
  };

  render() {
    const {classes} = this.props;
    return (
      <FormControl>
        <Input
          id="search-bar"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="search"
                onClick={() => this.search()}
                onMouseDown={() => this.search()}
                color={"inherit"}
              >
                <SearchIcon/>
              </IconButton>
            </InputAdornment>
          }
          onChange={e => this.setState({keyword: e.target.value})}
          placeholder={"search word"}
          className={classes.searchBar}
          disableUnderline
          onKeyDown={e => this.keyDown(e.key)}
        />
      </FormControl>
    );
  }
}