import React from 'react';
import { Component } from 'react';
import {GoogleMapLoader, withGoogleMap, GoogleMap, InfoWindow, Marker} from 'react-google-maps';
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import FaSpinner from 'react-icons/lib/fa/spinner';
import _ from 'lodash';
import {SearchBox } from 'react-google-maps';
import { Link } from 'react-router';
import { Header } from './header.js';
import events from '../data/events';
import fancyMapStyles from '../mapstyles/fancyMapStyles.json';

const PopUpInfoWindowExampleGoogleMap = _.flowRight(
withScriptjs,
withGoogleMap,
)(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={9}
    defaultCenter={props.center}
  >
  {props.markers.map((marker, index) => (
    <Marker
      key={index}
      position={marker.position}
      onClick={() => props.onMarkerClick(marker)}
      >
      {/*
         Show info window only if the 'showInfo' key of the marker is true.
         That is, when the Marker pin has been clicked and 'onCloseClick' has been
         Successfully fired.
       */}
       {marker.showInfo && (
         <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
           <div>{marker.infoContent}</div>
         </InfoWindow>
       )}
    </Marker>
  ))}
  </GoogleMap>
));

export default class PopUpInfoWindowExample extends Component {
  //defines initial state where google map will render
    state = {
      center: {
        lat: 37.80,
        lng: -122.41
      },
  //array of object markers
  markers: [
    {
      position: {
        lat: 37.415983878455485,
        lng: -121.89943252869442
      },
      showInfo: false,
      infoContent:
         <div><img className="event-icon" src="../../images/aod_2017.png"></img> <p><b>AOD 2017</b></p> <p><b>Rating:</b></p> <p><b>Date: 03/18/17-03/19/17</b></p> <p><b>Genre: <a href="/anime">J-Pop</a></b></p> <p>AOD is a convention devoted to japanese anime and video games. Come and listen to the various musicians play music from your favorite japanese anime and video games. </p> <a href="/event/aod-2017">Post a comment</a> </div>
    },
    {
      position: {
        lat: 37.787751,
        lng: -122.421427
      },
      showInfo: false,
      infoContent:
        <div><img className="event-icon" src="../../images/amiyumi.png"></img> <p><b>Puffy AmiYumi Tour</b></p> <p><b>Rating:</b></p> <p><b>Date:04/07/17</b></p> <p><b>Genre: <a href="/jrock">J-Rock</a></b></p> <p>Listen to the popular J-rock duo, Puffy Amiyumi on Tour </p> <a href="/event/amiyumi">Post a comment</a> </div>
    },
    {
      position: {
        lat: 37.785767,
        lng: -122.430630
      },
      showInfo: false,
      infoContent:
        <div><img className="event-icon" src="../../images/jpop-summit.png"></img> <p><b>J-Pop Summit 2017</b></p> <p><b>Rating:</b></p> <p><b>Date:09/09/17 - 09/10/17</b></p> <p><b>Genre: <a href="/anime">J-Pop</a></b></p> <p>Listen to various j-pop artists in this special event in SF </p> <a href="/event/j-pop-summit">Post a comment</a> </div>
    },
  ],
};

//binds event handler on Click event
handleMapLoad = this.handleMapLoad.bind(this);
handleMarkerClick = this.handleMarkerClick.bind(this);
handleMarkerClose = this.handleMarkerClose.bind(this);

handleMapLoad(map) {
  this._mapComponent = map;
  if (map) {
    console.log(map.getZoom());
  }
}

//Toggle to true to show InfoWindow and re-render Component
handleMarkerClick (targetMarker) {
   this.setState({
     markers: this.state.markers.map(marker => {
       if (marker === targetMarker) {
         return {
           ...marker,
           showInfo: true,
         };
       }
       return marker;
     }),
   });
 }

handleMarkerClose (targetMarker) {
  this.setState({
    markers: this.state.markers.map(marker => {
      if (marker === targetMarker) {
        return {
          ...marker,
          showInfo: false,
        };
      }
      return marker;
    }),
  });
}

render() {
  return (
    <PopUpInfoWindowExampleGoogleMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBO5ewDG5UAuVKsbhEo4NkEDg5TpTf9wM4"
      loadingElement={
        <div style={{ width: '500px'}}>
          <FaSpinner
            style={{
              display: 'block',
              width: '80px',
              height: '80px',
              margin: '150px auto',
              animation: 'fa-spin 2s infinite linear',
            }}
            />
        </div>
      }
      containerElement={
        <div className = "Map" style={{ width: '1000px' }} />
        }
      mapElement={
        <div style={{ height: '600px' }} />
        }
      center= {this.state.center}
      markers= {this.state.markers}
      onMapLoad={this.handleMapLoad}
      onMarkerClick={this.handleMarkerClick}
      onMarkerClose={this.handleMarkerClose}
      />
  );
}
}
