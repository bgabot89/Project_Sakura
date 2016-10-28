import React from 'react';
import { PropTypes, Component } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, PrevButton, NextButton, Progress, Timer } from 'react-soundplayer/components';
import { Link } from 'react-router';


export default class Genres extends React.Component {
    render () {
      return (
        <div className="text-center">
        <h1> Genres </h1>
        <ul className="img-list">
        <li>
          <Link to="/anime"><img className ="genre-bg" src="../images/anime.png"/>
          <span className="text-content"><span>Anime</span></span>
          </Link>
        </li>
        <li>
          <Link to="/jrock"><img className ="genre-bg" src="../images/jrock_wall.png"/>
          <span className="text-content"><span>J-Rock</span></span>
          </Link>
        </li>
        </ul>
      </div>
      );
  }
}
