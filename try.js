// Bring in our dependencies
const app = require('express')();
var cors = require('cors')


const routes = require('./routes');

//  Connect all our routes to our application
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);

// Turn on that server!
app.listen(8080, () => {
  console.log('App listening on port 8080');
});