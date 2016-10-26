import React from 'react';
import { PropTypes, Component } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, PrevButton, NextButton, Progress, Timer } from 'react-soundplayer/components';

const clientId = 'ced46db7be1e678d369f554b27aded8a';
const streamUrl = 'https://soundcloud.com/racheeeeello/kuchizuke-diamond-weaver-yamada-kun-to-7-nin-no-majo-op-full';

// https://soundcloud.com/racheeeeello/kuchizuke-diamond-weaver-yamada-kun-to-7-nin-no-majo-op-full
// https://soundcloud.com/bchan-234803630/sets/j-pop

export class CustomPlayer extends Component {
  play() {
    let { soundCloudAudio, playing } = this.props;
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play();
    }
  }

  render() {
    let { track, playing } = this.props;

    if(!track) {
      return <div>Loading ....</div>
    }

    return (
      <div>
        <h2>{track.title}</h2>
        <h3>{track.user.username}</h3>
        <button onClick={this.play.bind(this)}>
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
    );
  }
  }

  export default class App extends Component {
  render() {
    return (
      <SoundPlayerContainer resolveUrl={streamUrl} clientId={clientId}>
        <CustomPlayer />
      </SoundPlayerContainer>
    );
  }
  }
