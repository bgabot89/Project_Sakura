import React from 'react';
import { Route, IndexRoute, Router} from 'react-router';

import App from './components/app';
import Map from './components/map';
import HomeComponent from './components/home';
import Song from './components/song';
import CommentsIndex from './components/comments_index';
import CommentsNew from './components/comments_new';
import CommentsShow from './components/comments_show';

export default (
  <Route path="/" component={App}>
    {/* make them children of `App` */}
    <IndexRoute component={HomeComponent}/>
      <Route path="/map" component={Map}/>
      <Route path="/songs" component={Song}/>
      <Route path="/comments" component={CommentsIndex}/>
      <Route path="comments/new" component={CommentsNew}/>
      <Route path="comments/:id" component={CommentsShow}/>
  </Route>

);
