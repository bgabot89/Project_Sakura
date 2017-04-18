import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import Home from './home';

export default class Navbar extends Component {

  /* constructor(props) {
    super(props);
    this.state = {active: false};
  }

  click() {
    this.setState{{active: true}};
  }*/

  render() {
    return (
      <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
           </button>
            <Link to="/">
              <img className="logo-saku" alt="Brand" src="images/logo_saku.png"/>
            </Link>
          </div>
          <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav pull-right">
              <li className="navbar-list"><Link to="/map">Events</Link></li>
              <li className="navbar-list"><Link to="/songs">Music</Link></li>
            </ul>
        </div>
      </div>
      </nav>
    {this.props.children || <Home/>}
    </div>
    );
  }
}
