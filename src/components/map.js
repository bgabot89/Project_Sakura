import React from 'react';
import { Component } from 'react';
import {GoogleMapLoader, GoogleMap, InfoWindow, Marker} from 'react-google-maps';

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
        content: '<b>AOD 2017</b>'+'<p>AOD is a convention devoted to japanese anime and video games. Come and listen to the various musicians play music from your favorite japanese anime and video games. </p>'
      },
      {
        position: new google.maps.LatLng(37.806815, -122.4314908),
        showInfo: false,
        content: 'Place 2'
      },
      {
        position: new google.maps.LatLng(37.7877515, -122.4214273),
        showInfo: false,
        content: 'Place 3'
      },
      {
        position: new google.maps.LatLng(37.80, -122.4214273),
        showInfo: false,
        content: 'Place 4'
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
