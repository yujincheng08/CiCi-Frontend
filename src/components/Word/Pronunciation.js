import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import styles from 'styles';
import Sound from 'react-sound';

@withStyles(styles)
export default class Pronunciation extends React.Component {
  state = {
    status: Sound.status.STOPPED,
  };

  play() {
    this.setState({status: Sound.status.PLAYING});
  }

  stop() {
    this.setState({status: Sound.status.STOPPED});
  }

  render() {
    const {url} = this.props;
    return (
      <IconButton onClick={() => this.play()}>
        {this.state.status === Sound.status.PLAYING ? <VolumeUpIcon/> : <VolumeMuteIcon/>}
        <Sound url={url}
               playStatus={this.state.status}
               onFinishedPlaying={() => this.stop()}
        />
      </IconButton>
    );
  }
}