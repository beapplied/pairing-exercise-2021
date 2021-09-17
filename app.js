const express = require('express');
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const sqlite = require('sqlite3');
const port = 8080;

const applicationRoutes = require('./routes/applications')

// models
const models = require("./models");
app.use(cors())

//Sync Database
models.sequelize.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// index path
app.get('/', function(req, res){
    console.log('app listening on port: '+port);
    res.send('test express nodejs sqlite')
});

app.get('/applications', applicationRoutes.listApplications)


app.listen(port, function(){
    console.log('app listening on port: '+port);
});

module.exports = app;