var express = require('express');
var dir = require('node-dir');
var app = express();

//Static Directory
app.use(express.static(__dirname + '/public'));

//Set a path here :
var path = 'C:/Users/Guillaume/Desktop';

//First and only view
app.get('/', function(req, res) {
    //dir.paths give us the list of files and folders in an array
    dir.paths(path, true, function(err, paths) {
        if (err) throw err;
        //Template view with array in params
        res.render('index.ejs', {array: paths});
    });
});

//Simple 404 error
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

app.listen(80);