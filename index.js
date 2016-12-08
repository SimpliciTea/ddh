const express = require('express');
const browserSync = require('browser-sync');
const app = express();


// config
//app.set('view engine', 'pug');
//app.set('views', __dirname + '/assets/views');
app.set('views', __dirname + '/public');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));


// routing
app.get('/', (req, res) => {
  res.render('index')
});

app.get('/clients', function(req, res) {
  res.render('clients.html');
  //res.render('clients', {clients: clientData});
})


// server
app.listen(app.get('port'), () => {
  browserSync({
    proxy: 'localhost:' + app.get('port'),
    files: 'public/**/*',
    reloadDelay: 100
  });

  console.log('App listening on port 3000');
});
