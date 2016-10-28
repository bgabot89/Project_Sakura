import React, {PropTypes, Component } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, PrevButton, NextButton, Progress, Timer } from 'react-soundplayer/components';

const clientId = 'ced46db7be1e678d369f554b27aded8a';
const Yamada = 'https://soundcloud.com/racheeeeello/kuchizuke-diamond-weaver-yamada-kun-to-7-nin-no-majo-op-full';

class Anime extends React.Component {
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
                <svg className="music-icon" id="j-electro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1567.2 1230.1">
                  <circle className="st100" cx="768" cy="615.1" r="547.5" id="icon_x5F_circle"/>
                  <g id="miku_clothes">
                      <path className="st102" d="M756.7 743.8c-110.9 0-200.8 104.1-200.8 232.5 0 64.3 22.6 122.5 59 164.6 48.6 14.1 100 21.7 153.1 21.7 42.5 0 83.9-4.8 123.6-14 40.5-42.5 66-104 66-172.3-.1-128.4-90-232.5-200.9-232.5z"/>
                      <path className="st102" d="M747.4 740.9c-110.9 0-200.8 104.1-200.8 232.5 0 64.3 22.6 122.5 59 164.6 48.6 14.1 100 21.7 153.1 21.7 42.5 0 83.9-4.8 123.6-14 40.5-42.5 66-104 66-172.3 0-128.4-89.9-232.5-200.9-232.5z"/>
                  </g>
                  <g id="collar_miku">
                      <path className="st113" d="M752.5 857.9l67 73.3 76.8-120.7zM679.2 931.2l73.3-73.3-139.6-44z"/>
                  </g>
                  <g id="earphones_miku">
                      <path className="st105" d="M988.4 534.4h34.6v152h-34.6z"/>
                      <path className="st106" d="M991.2 622.5h21.1v15.1h-21.1zM991.2 646h21.1v15.1h-21.1z"/>
                      <path className="st105" d="M477.2 539.1h34.6v152h-34.6z"/>
                      <path className="st106" d="M490.6 652h21.1v15.1h-21.1zM490.6 627h21.1v15.1h-21.1z"/>
                  </g>
                  <path className="st121" d="M509.5 615.1c0-134.1 108.7-242.8 242.8-242.8S995.1 481 995.1 615.1 886.4 857.9 752.3 857.9c-143.7 0-242.8-83.6-242.8-242.8z" id="skin"/>
                  <g id="eyes">
                      <ellipse cx="648.3" cy="591.3" rx="30.8" ry="51"/>
                      <ellipse cx="856.2" cy="591.3" rx="30.8" ry="51"/>
                  </g>
                  <g id="miku_hair">
                      <path className="st125" d="M549.5 477.8H955C911.6 412 837 368.5 752.3 368.5S592.9 412 549.5 477.8z"/>
                      <path className="st125" d="M777.3 458.1s-41.4 88.2 0 164.4c-79-70.4-80.2-164.4-80.2-164.4h80.2zM697.1 477.8s-114.3 48.9-119.5 142.9c-4.4-84.3 7-153.5 30.6-162.6s88.9 19.7 88.9 19.7z"/>
                      <path className="st125" d="M771.5 473.2S939.2 548.8 951.1 630c-8.5-75.2-83.8-156.8-83.8-156.8l-99.4-3.9"/>
                      <path className="st125" d="M900.7 515.6s95.5 40.6 97.1 114.4c5-76.8-35.1-145.9-46.7-158-11.6-12-83.8 1.1-83.8 1.1l33.4 42.5zM591.8 477.8s-76.3 113.6-64.3 251.6c-18-129-9.1-148.3 21.9-251.6h42.4z"/>
                      <path className="st125" d="M582.9 438.1s-106.1 77.3-102 209c17.6-38.4 47.7-116.1 63.3-126.5 15.5-10.4 38.7-82.5 38.7-82.5z"/>
                  </g>
                  <g id="tie_miku">
                      <path className="st125" d="M752.5 857.9l30.9 33.1-30.9 35.2-31.4-34.2zM752.5 926.2l46.4 118.6-42.2 117.7-35.6-118.2z"/>
                  </g>
                  <g id="pigtails_x5F_miku">
                      <path className="st125" d="M896.3 415.9c22.7-49.8 85.5-28.4 162.5 51.1 108.9 112.5 170.6 262.1 141.7 412.8-48.3-137.5-71-209-104.2-264.7 27.2 44.1 85.8 174.3 36.3 311.1-3-105.2-13-326.6-146.5-437.7-60-49.9-34.9-16.4-34.9-16.4l-54.9-56.2zM612.9 413.7c-25.5-48.4-87-23.4-159.3 60.4-102.2 118.6-155.1 271.5-117.5 420.2 40.3-140 58.8-212.8 88.7-270.2-24.6 45.6-75.6 179-18.2 312.7-3.1-105.2-6-326.8 120.9-445.5 57-53.3 33.9-18.4 33.9-18.4l51.5-59.2z"/>
                  </g>
                  <g id="miku_x5F_ornaments">
                      <path className="st116" d="M905.9 353l62.7 70.1-17.5 48.9-10.5-13.9 10.5-38.4-45.2-41.2-18.9 30.9-13.4-8.4zM589.7 357.1l-60.1 72.5 19.4 48.2 10-14.4-12-38 43.7-42.8 20 30.1 13.1-8.8z"/>
                  </g>
                  <g id="musical_notes">
                      <g className="music_note" id="music_note1">
                          <ellipse transform="scale(-1) rotate(-16.086 -2826.746 7592.52)" className="st133" cx="1073" cy="399.4" rx="61.6" ry="38.6"/>
                          <path className="st133" d="M1105 360.6l-50.7-175.7s102.6-42.3 147.6 96c-19.9-18.7-57.7-65-112.3-46 22.7 73.7 40.7 143 40.7 143"/>
                      </g>
                      <g className="music_note" id="music_note2">
                          <ellipse transform="scale(-1) rotate(-16.086 -2368.804 9000.845)" className="st133" cx="1272" cy="334.7" rx="44.5" ry="27.9"/>
                          <path className="st133" d="M1295.1 306.6l-36.6-127.1s74.2-30.6 106.7 69.4c-14.4-13.5-41.7-47-81.2-33.3 16.4 53.3 29.5 103.4 29.5 103.4"/>
                      </g>
                      <g className="music_note" id="music_note3">
                          <ellipse transform="scale(-1) rotate(-16.086 -2025.271 10137.473)" className="st133" cx="1432.6" cy="286.2" rx="31" ry="19.4"/>
                          <path className="st133" d="M1448.7 266.6l-25.5-88.4s51.6-21.3 74.3 48.3c-10-9.4-29-32.7-56.5-23.2 11.4 37.1 20.5 72 20.5 72"/>
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

class AnimePlayer extends React.Component {
    render() {
        return (
            <SoundPlayerContainer resolveUrl={Yamada} clientId={clientId}>
                <Anime />
            </SoundPlayerContainer>
        );
    }
}

Anime.propTypes = {
    resolveUrl: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired
};

export default AnimePlayer;
