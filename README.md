# Project_Sakura
Revamped Version of Old Project Sakura Page, now with Webpack Integration and ES6 support

Github link to old app: https://github.com/bgabot89/ProjectSakura

#About
Project Sakura is a yelp-like web application that helps users find japanese music events in the area. Currently, the app only shows events from the SF Bay Area but will slowly add more cities and possibly other countries as I continue to develop the application.

#Changes from Old Version to New Version:
- More React Components added - Google Maps and Soundcloud APIs now written in React (old version used jQuery)
- React-Router added
- Webpack replacing gulp
- ES6 replaces ES5
- New SVG Animations

#Stack
- React.JS
- Webpack
- Node.js

#Bugs
- Link tag from react-router won't work in Google Maps API. This is a known error with the React Google Maps Package installed and will hopefully be fixed in the near future.
- Logo breaks when reloading page on event Page or clicking on href request
- Music does not work on safari (known server-side issue for soundcloud API)
