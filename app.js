var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var port = process.env.PORT || 8001

var employee = require('./controllers/employee')
var device = require('./controllers/device')

var app = express()

app.use(bodyParser.json())
app.set('view engine', 'ejs')

// Public Folder
app.use(express.static('./public'))

app.use('/employee',employee)
app.use('/device',device)

app.listen(port, function (){
	console.log("Listening on", port)
})

module.exports = app
