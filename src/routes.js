import React from 'react';
import { Route, IndexRoute, Router} from 'react-router';

import App from './components/app';
import Map from './components/map';
import HomeComponent from './components/home';

export default (
  <Route path="/" component={App}>
    {/* make them children of `App` */}
    <IndexRoute component={HomeComponent}/>
    <Route path="/map" component={Map}/>
  </Route>

);
