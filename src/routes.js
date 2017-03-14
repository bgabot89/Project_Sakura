import React from 'react';
import { Route, IndexRoute, Router} from 'react-router';

import Navbar from './components/navbar';
import Map from './components/map';
import HomeComponent from './components/home';
import Genres from './components/genres';
import Anime from './components/anime';
import Jrock from './components/jrock';
import Jelectro from './components/jelectro';
import EventPage from './components/eventPage';
import AmiYumi from './components/amiYumi';
import CommentsIndex from './components/comments_index';
import CommentsNew from './components/comments_new';
import CommentsShow from './components/comments_show';

export default (
  <Route path="/" component={Navbar}>
    {/* make them children of `App` */}
    <IndexRoute component={HomeComponent}/>
      <Route path="/event/:id" component={EventPage}/>
      <Route path="/map" component={Map}/>
      <Route path="/songs" component={Genres}/>
      <Route path="/anime" component={Anime}/>
      <Route path="/jrock" component={Jrock}/>
      <Route path="/jelectro" component={Jelectro}/>
      <Route path="/amiyumi" component={AmiYumi}/>
      <Route path="/comments" component={CommentsIndex}/>
      <Route path="comments/new" component={CommentsNew}/>
      <Route path="comments/:id" component={CommentsShow}/>
  </Route>

);
