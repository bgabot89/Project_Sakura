import React, {PropTypes, Component } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, PrevButton, NextButton, Progress, Timer } from 'react-soundplayer/components';

const clientId = 'ced46db7be1e678d369f554b27aded8a';
const lieinapril = 'https://soundcloud.com/jctraya/shigatsu-op-hikaru-nara';

const testBg = '../../images/j-pop-bg.png';

class Anime extends Component {

  play() {
      let { soundCloudAudio, playing } = this.props;
      if (playing) {
          soundCloudAudio.pause();
      } else {
          soundCloudAudio.play();
      }
  }
   render () {
     //initialize variables from react soundcloud player components
     let { track, playing, currentTime, duration} = this.props;
     //if the track hasn't been loaded yet, render no track
     if (!track) {
         return <div>Loading...</div>;
     }

     return (
        <div className="song-image container" id="j-pop-bg">
            <h1 className="song-name">{track ? track.title : ''}</h1>
          <div className="play-and-progress-section">
            <PlayButton
                className="flex-none button-transparent button-grow rounded"
                {...this.props}
            />
            <Progress
                className="flex-auto bg-darken-3 rounded"
                innerClassName="rounded-left bg-white"
                value={(currentTime / duration) * 100 || 0}
                {...this.props}
            />
          </div>
        </div>
     );
   }
}

class AnimePlayer extends React.Component {
    render() {
        return (
            <SoundPlayerContainer resolveUrl={lieinapril} clientId={clientId}>
                <Anime />
            </SoundPlayerContainer>
        );
    }
}

export default AnimePlayer;
