import React from 'react';
import { Component } from 'react';
import {GoogleMapLoader, GoogleMap, InfoWindow, Marker} from 'react-google-maps';
import { Link } from 'react-router';
import { Header } from './header.js';

export default class PopUpInfoWindow extends Component {

//defines initial state where google map will render
  state = {
    center: {
      lat: 37.80,
      lng: -122.41
    },
    //creates an array of markers
    markers: [
      {
        position: new google.maps.LatLng(37.415983878455485, -121.89943252869442),
        showInfo: false,
        content: '<img class="event-icon" src="../../images/aod2017.png"</img>' + '<p><b>AOD 2017</b></p>'+ '<p><b>Date: 03/18/17-03/19/17</b></p>' + '<p><b>Genre: <a href="/anime">Anime</a></p></b>' + '<p>AOD is a convention devoted to japanese anime and video games. Come and listen to the various musicians play music from your favorite japanese anime and video games. </p>' + '<a href="/comments">Post a comment</a>'
      },
      {
        position: new google.maps.LatLng(37.787751, -122.421427),
        showInfo: false,
        content: '<img class="event-icon" src="../../images/amiyumi.png"</img>' + '<p><b>Puffy AmiYumi Tour</b></p>'+ '<p><b>Artist: Puffy AmiYumi</b></p>'+ '<p><b>Rating:</b></p>'+ '<p><b>Date: 04/07/17</b></p>' + '<p><b>Genre: <a href="/jrock">J-Rock</a></b></p>' + '<p>Listen to the popular J-rock duo, Puffy Amiyumi on Tour </p>' + '<a href="/comments">Post a comment</a>'
      },
      {
        position: new google.maps.LatLng(37.785767, -122.430630),
        showInfo: false,
        content: '<img class="event-icon" src="../../images/jpop-summit.png"</img>' + '<p><b>J-Pop Summit 2017</b></p>'+ '<p><b>Date: 09/09/17 - 09/10/17</b></p>' + '<p><b>Genre: <a href="/jrock">J-Rock</a></b></p>' + '<p>Listen to various j-pop artists in this special event in SF</a>'
      }
    ]
  }

  //Event handlers: Toggle to 'true' to show InfoWindow and re-render component
  handleMarkerClick(marker) {
    marker.showInfo = true;
    this.setState(this.state);
  }

  handleMarkerClose(marker) {
    marker.showInfo = false;
    this.setState(this.state);
  }

  renderInfoWindow(ref, marker) {
    return (
      //nesting components inside the Window for marker
      <InfoWindow
         key={`${ref}_info_window`}
         content={marker.content}
         onCloseclick={this.handleMarkerClose.bind(this, marker)} >

        //renders content on the marker
       <div><h1> {marker.content}</h1></div>

     </InfoWindow>
   );

  }

  render() {
//creates GoogleMap element with specs such as height, width, and zoom
    return (
      <GoogleMapLoader
        containerElement={
          <div className="Map"
            {...this.props}
            style={{
              height: '500px',
              width: '1000px'
            }} >
          </div>
        }
      googleMapElement={
        <GoogleMap
          center={this.state.center}
          defaultZoom={9}
          ref='map'>

          {this.state.markers.map((marker, index) =>

            {
              const ref = `marker_${index}`;

              return ( <Marker
                key={index}
                ref={ref}
                position={marker.position}
                onClick={this.handleMarkerClick.bind(this, marker)} >
                {marker.showInfo ? this.renderInfoWindow(ref,marker): null}
              </Marker>
            );
          })
      }
    </GoogleMap>
  }
  /> //end Marker
    );
  }
};
