import React from 'react';
import { Component } from 'react';

//declare a component called footer that will be embedded onto the page regardless of which route, similar to navbar-list

export default class Footer extends React.Component {
  render () {
    return (
        <footer className="footer text-center">
          <div className="copyright-text">Copyright 2017, All rights reserved</div>
        </footer>
    );
  }
}
