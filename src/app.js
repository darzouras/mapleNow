var express = require('express');
// no need to connect with a database quite yet
// var mysql = require('./dbcon.js');
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
    context.title = "MapleNow";
    res.render('home', context);
});

app.get('/about', function(req, res, next){
    var context = {};
    context.title = "MapleNow - About";
    res.render('about', context);
});

app.get('/hair', function(req, res, next){
    var context = {};
    context.title = "MapleNow - Hairstyles";
    res.render('hair', context);
});

app.get('/haircolor', function(req, res, next){
    var context = {};
    context.title = "MapleNow - Hair Color";
    res.render('haircolor', context);
});

app.get('/face', function(req, res, next){
    var context = {};
    context.title = "MapleNow - Plastic Surgery";
    res.render('face', context);
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

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + ' press Ctrl-C to terminate.');
});
