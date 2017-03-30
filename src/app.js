var express = require('express');
// dbcon.js will not be included in the github repository
var mysql = require('dbcon.js');
var bodyParser = require('body-parser');

const PORT = 8080;

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// find the
var path = require("path");
app.use(express.static(path.join(__dirname, '/public')));

/****************************
 * HOMEPAGE
 ***************************/
app.get('/', function(req, res, next){
    res.render('home');
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

app.listen(PORT, function(){
    console.log('Express started on http://localhost:' + PORT + ' press Ctrl-C to terminate.');
});

startDocker(function() {
    console.log("Starting MapleNow!");
    startApp(function() {
        cleanup(process.exit);
    })
});
