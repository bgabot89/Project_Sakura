const express = require('express');
const path = require('path');

//initialize the server for ejs
const app = express();

//initialize for ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//define folder for static assets
app.use(express.static(path.join(__dirname, 'static')));

//universal routing and rendering
app.get('*', (req,res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }
      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );

  // res.sendFile(path.resolve(__dirname, 'index.html'))
});


//when starting server, listens to default port 300
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
