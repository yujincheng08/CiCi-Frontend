import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import styles from 'styles';
import Sound from 'react-sound';

@withStyles(styles)
export default class Definition extends React.Component {
  state={
    soundUrl: "",
    status: Sound.status.STOPPED,
  };

  play(url) {
    if(url)
      this.setState({soundUrl: url, status: Sound.status.PLAYING});
  }

  render() {
    const {examples} = this.props;
    return (
      <List>
        {examples.map(({chn, eng, mp3Url})=>(
            <ListItem key={`${eng}`} button onClick={()=>{
              this.play(mp3Url);
            }}>
              <ListItemText primary={eng} secondary={chn}/>
            </ListItem>
            ))}
        <Sound url={this.state.soundUrl} playStatus={this.state.status}/>
      </List>
    );
  }
}