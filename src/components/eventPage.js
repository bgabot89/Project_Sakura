import React from 'react';
import { Link } from 'react-router';
import events from '../data/events';

export default class EventPage extends React.Component {
  render () {
    const id = this.props.params.id;
    const event = events.filter((event) => event.id === id)[0];
    if (!event) {
      return <div> not found! </div>
    }
    return (
        <div className="event">
          <div className="event-container">
            <img src={`/images/${event.image}`}/>
            <h2 className="name">{event.name}</h2>
            <button> <Link to="/comments"> Post a Comment</Link></button>
          </div>
        </div>
    )
  }
}
