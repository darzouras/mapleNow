var express = require('express');
// dbcon.js will not be included in the github repository
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.set('port', (process.env.PORT || 5000));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// find the
var path = require("path");
app.use(express.static(path.join(__dirname, 'public')));

/****************************
 * HOMEPAGE
 ***************************/
app.get('/', function(req, res, next){
    var context = {};
    context.title = "MapleNow"
    res.render('home', context);
});

/****************************
 * ERROR PAGES
 ***************************/
app.use(function(req, res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(apps.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + ' press Ctrl-C to terminate.');
});
