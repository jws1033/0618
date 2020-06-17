var express = require('express')

var app = express()

var port =8000;
app.listen(8080, function(){
    console.log('server is runing at http:localhost:8080')
})