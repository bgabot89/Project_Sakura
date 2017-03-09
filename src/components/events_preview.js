import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class EventPreview extends React.Component {
  render () {
    return (
        <div className="event-preview-card">
          <img className="image-preview" src={`img/${this.props.image}`}/>
          <h3 className="name">{this.props.name}</h3>
          <h4 className="date">{this.props.date}</h4>
          <Link className="learn-more-button" to="/map"><div className="learn-more-text">Learn More ></div></Link>
        </div>
    );
  }
}
