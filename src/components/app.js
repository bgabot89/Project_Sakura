import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import Home from './home';


export default class App extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-default" id="header">
      <div className="container">
        <div className="navbar-header page-scroll">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNav" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand"><img id="proj-logo" className="img-responsive" alt="Responsive image" src="../../images/logo.png"/></Link>
      </div>
      <div id="myNav" className="navbar-collapse collapse">
  			<ul className="nav navbar-nav navbar-right">
  				<li className="page-scroll">
  					<Link to="/map">Events</Link>
  				</li>
  				<li className="page-scroll">
  					<Link to="#event">Music</Link>
  				</li>
          <li className="page-scroll">
            <Link to="#genre">Genre Samples</Link>
          </li>
  			</ul>
    	</div>
      </div>
    </nav>
    {this.props.children || <Home/>}
  </div>
    );
  }
}
