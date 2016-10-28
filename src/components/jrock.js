import React, {PropTypes, Component } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, PrevButton, NextButton, Progress, Timer } from 'react-soundplayer/components';

const clientId = 'ced46db7be1e678d369f554b27aded8a';
const jrock = 'https://soundcloud.com/sulto-nyan/bump-of-chicken-feat-hatsune-miku-ray';

class JRock extends React.Component {
  //maintains state of the play and pause button
    play() {
        let { soundCloudAudio, playing } = this.props;
        if (playing) {
            soundCloudAudio.pause();
        } else {
            soundCloudAudio.play();
        }
    }

    render() {
        //initialize variables from react soundcloud player components
        let { track, playing, currentTime, duration} = this.props;
        //if the track hasn't been loaded yet, render no track
        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <div className="text-center player-box" >
              <div onClick={this.play.bind(this)}>
                <svg className="music-icon" id="j-rock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1567.2 1230.1">
      <circle className="st10000" cx="768" cy="615.1" r="547.5" id="icon_x5F_circle"/>
      <path className="st104" d="M750 743.8c-110.9 0-200.8 104.1-200.8 232.5 0 63 21.6 120.1 56.7 161.9 50.1 15.5 103.4 24 158.5 24.4 41.4-.2 81.7-5 120.4-14 40.5-42.5 66-104 66-172.3 0-128.4-89.9-232.5-200.8-232.5z" id="j-rock_clothes"/>
      <g id="J-ROCK_COLLAR" className="st102">
          <path className="st1005" d="M752.3 857.8l67.1 61.7 42.3-85.5-109.4 23.8M752.3 857.8l-62.2 61.7-38.7-79.7 100.9 18"/>
      </g>
      <g id="J-ROCK_BUTTONS" className="st102">
          <ellipse className="st106" cx="760.1" cy="900.2" rx="7.8" ry="8.4"/>
          <ellipse className="st106" cx="760.1" cy="973" rx="7.8" ry="8.4"/>
          <ellipse className="st106" cx="760.1" cy="1059.2" rx="7.8" ry="8.4"/>
      </g>
      <g id="vest_j-rock">
          <path className="st118" d="M800.2 1168.7l81.8-18c-25.9 5.5-52.4 9.1-79.5 10.8-1.3 6.2-2.3 7.2-2.3 7.2zM978 877.6c-29.2-32.7-73.9-69.6-73.9-69.6l-5.8 3.6c36.5 42.1 59.1 100.4 59.1 164.7 0 68.3-25.5 129.8-66 172.3 0 0 59.5-50 66-78.1 6.6-28.1 49.9-160.2 20.6-192.9z"/>
          <path className="st119" d="M885.5 817.9l-23.8 13.2s-3.1 179.1-42.9 222.4c.4 67.7-2.7 95.2-4.9 106.2 15.8-1 31.4-2.6 46.7-4.9 14.7-2.5 29.2-5.6 43.5-9.3 39.8-42.5 64.8-103.4 64.8-171 0-64.4-22.6-122.6-59.9-171.3l-23.5 14.7z"/>
          <g>
              <path className="st118" d="M673 1151.3c-20.9-3.4-41.4-7.9-61.5-13.3-39.3-42.1-63.6-100.3-63.6-164.6 0-57 19.1-109.2 50.8-149.6-18.6 10.9-43.2 26-62.9 40.7-36.9 27.5-14.4 164.9-12.5 193.6s56.3 87.9 56.3 87.9l93.5 34.9c.1 0-2.5-3.3-.1-29.6z"/>
          </g>
          <path className="st119" d="M654.1 825.1l-24.3-13.5-24.1-15.1C567.3 846 544 905.3 543.9 970.9c-.2 64.7 22.2 123.4 58.6 166.3 32 10.1 65.2 17.4 99.4 21.5-2.2-12.1-5-40.5-4.5-106.9-40.6-44.2-43.3-226.7-43.3-226.7z"/>
      </g>
      <path className="st121" d="M509.5 615.1c0-134.1 108.7-242.8 242.8-242.8S995.1 481 995.1 615.1 886.4 857.9 752.3 857.9c-143.7 0-242.8-83.6-242.8-242.8z" id="skin"/>
      <g id="eyes">
          <ellipse cx="648.3" cy="591.3" rx="30.8" ry="51"/>
          <ellipse cx="856.2" cy="591.3" rx="30.8" ry="51"/>
      </g>
      <g id="sunglasses_j-rock">
          <path className="st128" d="M796.3 524.9h112.1v127.9H796.3zM588.4 524.9h112.1v127.9H588.4zM700.5 554h95.8v25.8h-95.8zM908.4 554l78-.6 5.2 25.8-83.2.5"/>
          <path className="st128" d="M591 551.2h-69.5l-8.5 28.5h78z"/>
      </g>
      <g id="moustache_j-rock">
          <path className="st129" d="M785.9 711.5l29.4 15.1-3-15.1-27.2-12.4zM686.9 713.9l29.9-14.4-3.5 15-27.6 11.7z"/>
      </g>
      <path className="st130" d="M779.4 856.8L768 823.5h-32.9L725 856.4s49.7 4.4 54.4.4z" id="beard_j-rock"/>
      <g id="HAT">
          <path className="st130" d="M484.7 508.7h548.9l-41.1-27.9H513.9l-29.2 22.1M959 480.8S921.7 200 743.4 313c1.2 2.3 0 167.8 0 167.8H959z"/>
          <path className="st130" d="M531.9 484.5s35.3-281.1 214.4-169.4c-1.1 2.3 1.2 167.8 1.2 167.8l-215.6 1.6z"/>
          <path className="st131" d="M532.4 480.8H959l-3.9-21.7H536.3z"/>
      </g>
      <g id="musical_notes">
          <g className="music_note" id="music_note1">
              <ellipse transform="scale(-1) rotate(-16.086 -2826.746 7592.52)" className="st1320" cx="1073" cy="399.4" rx="61.6" ry="38.6"/>
              <path className="st1320" d="M1105 360.6l-50.7-175.7s102.6-42.3 147.6 96c-19.9-18.7-57.7-65-112.3-46 22.7 73.7 40.7 143 40.7 143"/>
          </g>
          <g className="music_note" id="music_note2">
              <ellipse transform="scale(-1) rotate(-16.086 -2368.804 9000.845)" className="st1320" cx="1272" cy="334.7" rx="44.5" ry="27.9"/>
              <path className="st1320" d="M1295.1 306.6l-36.6-127.1s74.2-30.6 106.7 69.4c-14.4-13.5-41.7-47-81.2-33.3 16.4 53.3 29.5 103.4 29.5 103.4"/>
          </g>
          <g className="music_note" id="music_note3">
              <ellipse transform="scale(-1) rotate(-16.086 -2025.271 10137.473)" className="st1320" cx="1432.6" cy="286.2" rx="31" ry="19.4"/>
              <path className="st1320" d="M1448.7 266.6l-25.5-88.4s51.6-21.3 74.3 48.3c-10-9.4-29-32.7-56.5-23.2 11.4 37.1 20.5 72 20.5 72"/>
          </g>
      </g>
  </svg>
            </div>
            <h3>{track.title}</h3>
            <h3>{track.user.username}</h3>
            <Progress
              className="mt1 mb1 rounded"
              innerClassName="rounded-left"
              value={currentTime / duration * 100 || 0}
              {...this.props}
              />
            <button className = "play_pause_button" onClick={this.play.bind(this)}>
                    {playing ? 'Pause' : 'Play'}
                </button>
            </div>
        );
    }
}

class JRockPlayer extends React.Component {
    render() {
        return (
            <SoundPlayerContainer resolveUrl={jrock} clientId={clientId}>
                <JRock />
            </SoundPlayerContainer>
        );
    }
}

export default JRockPlayer;
